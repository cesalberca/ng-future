import { Component, HostBinding, Input } from '@angular/core'

@Component({
  selector: 'button[app-button], a[app-button]',
  standalone: true,
  imports: [],
  template: `<ng-content></ng-content>`,
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input({ required: true }) text: string = ''
  @Input() variant: 'primary' | 'warn' = 'primary'

  @HostBinding('class.custom-btn') get base() {
    return true
  }
  @HostBinding('class.custom-btn--primary') get primary() {
    return this.variant === 'primary'
  }
  @HostBinding('class.custom-btn--warn') get warn() {
    return this.variant === 'warn'
  }
}
