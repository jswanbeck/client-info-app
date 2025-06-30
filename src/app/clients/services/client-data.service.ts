import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root',
})
export class ClientDataService {
  constructor(private http: HttpClient) {}

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>('/api/clients');
  }

  getClient(id: number): Observable<Client> {
    return this.http.get<Client>(`/api/clients/${id}`);
  }

  createClient(client: Partial<Client>): Observable<Client> {
    return this.http.post<Client>('/api/clients', client);
  }

  updateClient(id: number, client: Partial<Client>): Observable<Client> {
    return this.http.put<Client>(`/api/clients/${id}`, client);
  }

  deleteClient(id: number): Observable<Client> {
    return this.http.delete<Client>(`/api/clients/${id}`);
  }
}
