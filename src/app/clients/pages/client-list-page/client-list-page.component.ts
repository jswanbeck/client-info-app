import { Component, OnInit } from '@angular/core';
import { Client } from '../../models/client.model';
import { ClientDataService } from '../../services/client-data.service';

@Component({
  selector: 'app-client-list-page',
  templateUrl: './client-list-page.component.html',
  styleUrls: ['./client-list-page.component.scss'],
})
export class ClientListPageComponent implements OnInit {
  clients: Client[] = [];
  selectedClient: Client | null = null;

  constructor(private clientService: ClientDataService) {}

  ngOnInit(): void {
    this.clientService.getClients().subscribe(clients => {
      this.clients = clients;
      this.selectedClient = clients[0];
    });
  }

  onClientSelected(client: Client): void {
    this.selectedClient = client;
  }
}
