import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../../models/client.model';
import { ClientDataService } from '../../services/client-data.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent {
  clients$: Observable<Client[]>;

  constructor(private clientService: ClientDataService) {
    this.clients$ = new Observable<Client[]>();
  }

  ngOnInit(): void {
    this.clients$ = this.clientService.getClients();
    this.clients$.subscribe((clients) => {
      console.log(clients);
    })
  }
}
