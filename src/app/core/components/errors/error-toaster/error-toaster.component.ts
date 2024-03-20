import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  effect,
  inject,
  Inject,
  NgZone,
  PLATFORM_ID,
  signal,
} from '@angular/core'
import { EventEmitter } from '../../../event-emitter/event-emitter'
import { Events } from '../../../event-emitter/events'
import { isPlatformBrowser } from '@angular/common'

@Component({
  selector: 'app-error-toaster',
  standalone: true,
  imports: [],
  templateUrl: './error-toaster.component.html',
  styleUrl: './error-toaster.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorToasterComponent {
  errors = signal<Error[]>([])

  constructor(
    private readonly eventEmitter: EventEmitter,
    @Inject(PLATFORM_ID) private readonly platformId: object,
    private readonly changeDetectorRef: ChangeDetectorRef,
  ) {
    const handleError = (error: Error) => {
      this.errors.update(x => [...x, error])
    }

    const removeError = () => {
      this.errors.update(prevArray => prevArray.slice(1))
      this.changeDetectorRef.detectChanges()
    }

    effect(onCleanup => {
      this.eventEmitter.subscribe(Events.ERROR, handleError)

      onCleanup(() => {
        this.eventEmitter.unsubscribe(Events.ERROR, handleError)
      })
    })

    if (isPlatformBrowser(this.platformId)) {
      inject(NgZone).runOutsideAngular(() => {
        effect(onCleanup => {
          const timer = setInterval(removeError, 5_000)
          onCleanup(() => {
            clearInterval(timer)
          })
        })
      })
    }
  }
}
