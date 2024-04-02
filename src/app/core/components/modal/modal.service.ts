import { DOCUMENT } from '@angular/common'
import { ComponentFactoryResolver, Inject, Injectable, Injector, TemplateRef } from '@angular/core'
import { ModalComponent } from './modal.component'
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modalNotifier?: Subject<string>
  constructor(
    private resolver: ComponentFactoryResolver,
    private injector: Injector,
    @Inject(DOCUMENT) private document: Document,
  ) {}
  open(content: TemplateRef<unknown>, options?: { size?: string; title?: string }) {
    const modalComponentFactory = this.resolver.resolveComponentFactory(ModalComponent)
    const contentViewRef = content.createEmbeddedView(null)
    const modalComponent = modalComponentFactory.create(this.injector, [contentViewRef.rootNodes])

    console.log(options)
    modalComponent.instance.closeEvent.subscribe(() => this.closeModal())
    modalComponent.instance.submitEvent.subscribe(() => this.submitModal())

    modalComponent.hostView.detectChanges()
    this.document.body.appendChild(modalComponent.location.nativeElement)
    this.modalNotifier = new Subject()
    return this.modalNotifier?.asObservable()
  }

  closeModal() {
    this.modalNotifier?.complete()
  }

  submitModal() {
    this.modalNotifier?.next('confirm')
    this.closeModal()
  }
}
