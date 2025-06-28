import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from './models/client.model';
import { ClientDataService } from './services/client-data.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent {
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
