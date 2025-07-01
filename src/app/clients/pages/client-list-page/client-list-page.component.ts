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
  showConfirmDelete = false;
  filterableKeys: Set<string> = new Set<string>();
  filterField: string = '';
  filterValue: string = '';
  activeFilters: { key: string; value: string }[] = [];

  constructor(private clientService: ClientDataService) {}

  ngOnInit(): void {
    this.clientService.getClients().subscribe(clients => {
      this.clients = clients;
      clients.forEach(client => {
        Object.keys(client).forEach(key => {
          if (key !== 'id' && key !== 'avatar') {
            this.filterableKeys.add(key);
          }
        });
      });
    });
  }

  get filteredClients(): Client[] {
    let filtered = this.clients;
    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      filtered = filtered.filter(
        client =>
          client.name.toLowerCase().includes(term) || client.title?.toLowerCase().includes(term),
      );
    }
    for (const filter of this.activeFilters) {
      filtered = filtered.filter(
        client =>
          client[filter.key] !== undefined &&
          client[filter.key]?.toString().toLowerCase().includes(filter.value.toLowerCase()),
      );
    }
    if (this.filterField && this.filterValue) {
      filtered = filtered.filter(
        client =>
          client[this.filterField] !== undefined &&
          client[this.filterField]
            ?.toString()
            .toLowerCase()
            .includes(this.filterValue.toLowerCase()),
      );
    }
    return filtered.sort((a, b) => a.name.localeCompare(b.name));
  }

  get filterButtonEnabled(): boolean {
    return this.filterField.length > 0 && this.filterValue.length > 0;
  }

  get clearButtonEnabled(): boolean {
    return this.searchTerm.length > 0 || this.activeFilters.length > 0 || this.filterButtonEnabled;
  }

  addFilter() {
    if (this.filterField && this.filterValue) {
      this.activeFilters.push({ key: this.filterField, value: this.filterValue });
      this.filterValue = '';
    }
  }

  removeFilter(index: number) {
    this.activeFilters.splice(index, 1);
  }

  clearFilters() {
    this.activeFilters = [];
    this.filterField = '';
    this.filterValue = '';
    this.searchTerm = '';
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
      this.clients = this.clients.map(c => (c.id === client.id ? (client as Client) : c));
      this.selectedClient = client as Client;
    }
    this.showModal = false;
  }

  onModalCancelled() {
    this.showModal = false;
  }

  onDeleteClient() {
    if (this.selectedClient) {
      this.showConfirmDelete = true;
    }
  }

  onConfirmDelete() {
    if (this.selectedClient) {
      this.clientService.deleteClient(this.selectedClient.id).subscribe(() => {
        this.clients = this.clients.filter(c => c.id !== this.selectedClient?.id);
        this.selectedClient = null;
        this.showConfirmDelete = false;
      });
    }
  }

  onCancelDelete() {
    this.showConfirmDelete = false;
  }
}
