import { Component, HostBinding, Input } from '@angular/core'

@Component({
  selector: 'button[app-button], a[app-button]',
  standalone: true,
  imports: [],
  template: `<ng-content></ng-content>`,
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() text: string = ''
  @Input() variant: 'primary' | 'warn' = 'primary'

  @HostBinding('class.primary') get primary() {
    return this.variant === 'primary'
  }
  @HostBinding('class.warn') get warn() {
    return this.variant === 'warn'
  }
}
