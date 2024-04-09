import { ChangeDetectionStrategy, Component, model, output } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { CheckboxChangeEvent, CheckboxModule } from 'primeng/checkbox'

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [FormsModule, CheckboxModule],
  template: ` <p-checkbox [(ngModel)]="checked" [binary]="true" (onChange)="handleChange($event)"></p-checkbox> `,
  styleUrl: './checkbox.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxComponent {
  checked = model<boolean>()
  onChange = output<boolean>()

  handleChange(event: CheckboxChangeEvent) {
    this.onChange.emit(event.checked)
  }
}
