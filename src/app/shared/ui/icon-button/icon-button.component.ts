import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent {
  private _icon: string = '';
  resolvedIcon: string = '';

  @Input()
  set icon(value: string) {
    this._icon = value;
    // map icon name to /assets/icons/{name}.svg if input doesn't include a path/extension
    if (value && !value.includes('/') && !value.endsWith('.svg')) {
      this.resolvedIcon = `/assets/icons/${value}.svg`;
    } else {
      this.resolvedIcon = value;
    }
  }
  get icon(): string {
    return this._icon;
  }

  @Input() label: string = '';
  @Input() disabled: boolean = false;
  @Output() clicked = new EventEmitter<void>();

  onClick(event: Event) {
    if (!this.disabled) {
      this.clicked.emit();
    }
  }
}
