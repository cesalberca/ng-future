import { Component, ElementRef, EventEmitter, Output, input } from '@angular/core'

@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  size = input<string>()
  title = input<string>()

  @Output() closeEvent = new EventEmitter()
  @Output() submitEvent = new EventEmitter()

  constructor(private elementRef: ElementRef) {}

  close(): void {
    this.elementRef.nativeElement.remove()
    this.closeEvent.emit()
  }

  submit(): void {
    this.elementRef.nativeElement.remove()
    this.submitEvent.emit()
  }

  stopPropagation(e: Event) {
    e.stopPropagation()
  }
}
