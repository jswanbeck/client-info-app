import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConfirmationDialogModule } from './confirmation-dialog/confirmation-dialog.module';
import { ExpandablePanelModule } from './expandable-panel/expandable-panel.module';
import { ModalModule } from './modal/modal.module';

@NgModule({
  imports: [CommonModule, ModalModule, ExpandablePanelModule, ConfirmationDialogModule],
  exports: [ModalModule, ExpandablePanelModule, ConfirmationDialogModule],
})
export class SharedUiModule {}
