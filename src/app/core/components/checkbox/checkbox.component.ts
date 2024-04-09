import { ChangeDetectionStrategy, Component, model } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { CheckboxModule } from 'primeng/checkbox'

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [FormsModule, CheckboxModule],
  template: ` <p-checkbox [(ngModel)]="checked" [binary]="true"></p-checkbox> `,
  styleUrl: './checkbox.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxComponent {
  checked = model<boolean>()
}
