import { ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation } from '@angular/core'

@Component({
  selector: 'app-form-field',
  standalone: true,
  imports: [],
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class FormFieldComponent {
  @HostBinding('class.form-field') get base() {
    return true
  }
}
