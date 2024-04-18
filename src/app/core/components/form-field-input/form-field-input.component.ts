import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { FormControl, ReactiveFormsModule } from '@angular/forms'

type InputType = 'text' | 'number' | 'email' | 'password'

@Component({
  selector: 'app-form-field-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-field-input.component.html',
  styleUrl: './form-field-input.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormFieldInputComponent {
  label = input.required<string>()
  required = input<boolean | string>(false)
  type = input<InputType>('text')
  control = input.required<FormControl>()
  autocomplete = input<HTMLInputElement['autocomplete']>('off')
  error = input<string | undefined>()
}
