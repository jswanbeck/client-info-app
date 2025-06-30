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
  showModal = false;
  modalTitle = '';
  modalType: 'create' | 'edit' = 'create';

  constructor(private clientService: ClientDataService) {}

  ngOnInit(): void {
    this.clientService.getClients().subscribe(clients => {
      console.log(clients);
      this.clients = clients;
    });
  }

  get filteredClients(): Client[] {
    if (!this.searchTerm) return this.clients;
    const term = this.searchTerm.toLowerCase();
    return this.clients.filter(c => c.name.toLowerCase().includes(term));
  }

  onClientSelected(client: Client): void {
    if (this.selectedClient && this.selectedClient.id === client.id) {
      this.selectedClient = null;
    } else {
      this.selectedClient = client;
    }
  }

  onOpenModal(type: 'create' | 'edit') {
    this.modalType = type;
    this.modalTitle = type === 'create' ? 'Create Client' : 'Edit Client';
    this.showModal = true;
  }

  onCloseModal() {
    this.showModal = false;
  }

  onModalSubmitted(client: Partial<Client>) {
    if (this.modalType === 'create') {
      this.clients = [...this.clients, client as Client];
      this.selectedClient = client as Client;
    } else if (this.modalType === 'edit') {
      this.clients = this.clients.map(c => c.id === client.id ? client as Client : c);
      this.selectedClient = client as Client;
    }
    this.showModal = false;
  }

  onModalCancelled() {
    this.showModal = false;
  }

  onDeleteClient() {
    if (this.selectedClient) {
      this.clientService.deleteClient(this.selectedClient.id).subscribe(() => {
        this.clients = this.clients.filter(c => c.id !== this.selectedClient?.id);
        this.selectedClient = null;
      });
    }
  }
}
