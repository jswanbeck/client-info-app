import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Client } from '../../models/client.model';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss'],
})
export class ClientListComponent {
  @Input() clients: Client[] = [];
  @Input() selectedClient: Client | null = null;
  @Output() clientSelected = new EventEmitter<Client>();
}
