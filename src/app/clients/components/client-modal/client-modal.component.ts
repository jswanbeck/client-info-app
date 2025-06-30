import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Client } from '../../models/client.model';
import { AvatarService } from '../../services/avatar.service';
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
  initialAvatar: string | undefined;

  constructor(private clientService: ClientDataService, private avatarService: AvatarService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.modalType === 'edit' && this.selectedClient) {
      this.clientData = { ...this.selectedClient };
      this.initialAvatar = this.selectedClient.avatar;
    } else {
      const randomAvatar = this.avatarService.getRandomAvatarUrl();
      this.clientData = {
        name: '',
        title: '',
        avatar: randomAvatar,
        quote: '',
        nationality: ''
      };
      this.initialAvatar = randomAvatar;
    }
  }

  randomizeAvatar() {
    this.clientData.avatar = this.avatarService.getRandomAvatarUrl();
  }

  resetAvatar() {
    if (this.initialAvatar) {
      this.clientData.avatar = this.initialAvatar;
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
