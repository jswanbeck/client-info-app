import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models/client.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ClientDataService {
  constructor(private http: HttpClient) {}

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>('/assets/clients.json');
  }
}
