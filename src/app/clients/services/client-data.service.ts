import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root',
})
export class ClientDataService {
  constructor(private http: HttpClient) {}

  getClients(): Observable<Client[]> {
    return this.http.get<Omit<Client, 'id'>[]>('/assets/clients.json').pipe(
      map(clients => clients.map((client, idx) => ({ ...client, id: idx })))
    );
  }
}
