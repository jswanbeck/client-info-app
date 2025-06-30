import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Client } from '../../models/client.model';

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.scss'],
})
export class ClientInfoComponent implements OnChanges {
  @Input() client!: Client;
  @Output() clientSelect = new EventEmitter<Client>();

  customProperties: { key: string; value: string | number | undefined }[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['client'] && this.client) {
      const baseClientProperties = ['id', 'name', 'title', 'avatar', 'quote', 'nationality'];
      this.customProperties = Object.keys(this.client)
        .filter(key => !baseClientProperties.includes(key))
        .map(key => ({ key, value: this.client[key] }));
    }
  }

  onClick() {
    this.clientSelect.emit(this.client);
  }
}
