import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-expandable-panel',
  templateUrl: './expandable-panel.component.html',
  styleUrls: ['./expandable-panel.component.scss']
})
export class ExpandablePanelComponent {
  @Input() title: string = '';
  @Input() open: boolean = false;
  @Output() closed = new EventEmitter<void>();

  close() {
    this.closed.emit();
  }
}
