import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Client } from '../../models/client.model';
import { ClientDataService } from '../../services/client-data.service';

@Component({
  selector: 'app-client-modal',
  templateUrl: './client-modal.component.html',
  styleUrls: ['./client-modal.component.scss']
})
export class ClientModalComponent implements OnChanges {
  @Input() selectedClient: Client | null = null;
  @Input() modalType: 'create' | 'edit' = 'create';
  @Output() submitted = new EventEmitter<Partial<Client>>();
  @Output() cancelled = new EventEmitter<void>();

  clientData: Partial<Client> = {};

  constructor(private clientService: ClientDataService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.modalType === 'edit' && this.selectedClient) {
      this.clientData = { ...this.selectedClient };
    } else {
      this.clientData = {
        name: '',
        title: '',
        avatar: '',
        quote: '',
        nationality: ''
      };
    }
  }

  onSubmit() {
    if (!this.clientData.name || this.clientData.name.trim() === '') {
      return;
    }
    if (this.modalType === 'create') {
      this.clientService.createClient(this.clientData).subscribe(client => {
        this.submitted.emit(client);
      });
    } else if (this.modalType === 'edit' && this.selectedClient) {
      this.clientService.updateClient(this.selectedClient.id, this.clientData).subscribe(client => {
        this.submitted.emit(client);
      });
    }
  }

  onCancel() {
    this.cancelled.emit();
  }
}
