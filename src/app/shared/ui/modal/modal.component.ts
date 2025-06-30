import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() open = false;
  @Input() title = '';
  @Output() closed = new EventEmitter<void>();

  private backdropMouseDown = false;
  private backdropMouseUp = false;


  onBackdropMouseDown(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      this.backdropMouseDown = true;
    }
  }

  onBackdropMouseUp(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      this.backdropMouseUp = true;
    }
  }

  onBackdropClick(event: MouseEvent) {
    if (this.backdropMouseDown && this.backdropMouseUp && event.target === event.currentTarget) {
      this.onClose();
    }
    this.backdropMouseDown = false;
    this.backdropMouseUp = false;
  }

  onClose() {
    this.closed.emit();
  }
}
