import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog'
import { ComponentType } from '@angular/cdk/portal'
import { Component, EventEmitter, Inject, Output, TemplateRef, ViewChild, ViewContainerRef, input } from '@angular/core'
import { EmbedableDialog } from './embebable-modal'
import { ModalConfig } from './modal-config'

@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent<T> {
  @ViewChild('dynamicContent', { read: ViewContainerRef, static: true })
  dynamicContent!: ViewContainerRef

  projectedContent = input.required<TemplateRef<unknown>>()
  @Output() closeEvent = new EventEmitter()
  @Output() submitEvent = new EventEmitter()

  constructor(
    @Inject(DIALOG_DATA) public data: ModalConfig<T>,
    public dialogRef: DialogRef,
    private readonly viewContainerRef: ViewContainerRef,
  ) {}

  close(): void {
    this.dialogRef.close()
  }

  stopPropagation(e: Event) {
    e.stopPropagation()
  }

  classes = `modal ${this.data?.size}`

  loadComponent(component: ComponentType<EmbedableDialog<T>>) {
    const dynamicComponent = this.viewContainerRef.createComponent(component)
    dynamicComponent.instance.data = this.data.data
    dynamicComponent.instance.close = () => this.close()
    this.dynamicContent.insert(dynamicComponent.hostView)
  }
}
