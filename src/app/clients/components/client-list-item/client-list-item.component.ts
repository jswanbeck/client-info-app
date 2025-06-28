import { Component, Input } from '@angular/core';
import { Client } from '../../models/client.model';

@Component({
  selector: 'app-client-list-item',
  templateUrl: './client-list-item.component.html',
  styleUrls: ['./client-list-item.component.scss']
})
export class ClientListItemComponent {
  @Input() client!: Client;
}
