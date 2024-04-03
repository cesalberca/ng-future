import { Injectable } from '@angular/core'
import { Dialog } from '@angular/cdk/dialog'
import { ComponentType } from '@angular/cdk/portal'
import { ModalComponent } from './modal.component'
import { EmbedableDialog } from './embebable-modal'

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(public dialog: Dialog) {}
  open<T>(component: ComponentType<EmbedableDialog<T>>, data: T) {
    const dialogRef = this.dialog.open(ModalComponent, { data })
    dialogRef.componentInstance?.loadComponent(component)
  }
}
