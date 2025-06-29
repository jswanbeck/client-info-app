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
  searchTerm: string = '';

  constructor(private clientService: ClientDataService) {}

  ngOnInit(): void {
    this.clientService.getClients().subscribe(clients => {
      this.clients = clients;
      this.selectedClient = clients[0];
    });
  }

  get filteredClients(): Client[] {
    if (!this.searchTerm) return this.clients;
    const term = this.searchTerm.toLowerCase();
    return this.clients.filter(c => c.name.toLowerCase().includes(term));
  }

  onClientSelected(client: Client): void {
    this.selectedClient = client;
  }
}
