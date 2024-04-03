import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { FormControl, ReactiveFormsModule } from '@angular/forms'

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
  type = input<'text' | 'email' | 'password'>('text')
  control = input(new FormControl())
  autocomplete = input<string>()
  error = input<string | undefined>()
}
