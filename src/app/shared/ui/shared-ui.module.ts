import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { ExpandablePanelComponent } from './expandable-panel/expandable-panel.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [ConfirmationDialogComponent, ExpandablePanelComponent, ModalComponent],
  imports: [CommonModule],
  exports: [ConfirmationDialogComponent, ExpandablePanelComponent, ModalComponent],
})
export class SharedUIModule {}
