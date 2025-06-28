import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Client } from '../../models/client.model';

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.scss'],
})
export class ClientInfoComponent {
  @Input() client!: Client;
  @Output() clientSelect = new EventEmitter<Client>();

  onClick() {
    this.clientSelect.emit(this.client);
  }
}
