import { ChangeDetectionStrategy, Component, forwardRef, input } from '@angular/core'
import { NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms'
import { ControlValueAccessorDirective } from '../../directives/control-value-accessor.directive'

type InputType = 'text' | 'number' | 'email' | 'password'
@Component({
  selector: 'app-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent<T> extends ControlValueAccessorDirective<T> {
  label = input.required<string>()
  type = input<InputType>('text')
  autocomplete = input<HTMLInputElement['autocomplete']>()
  error = input<string | undefined>()
}
