import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ClientDataService } from './client-data.service';

describe('ClientDataService', () => {
  let service: ClientDataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ClientDataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch clients', () => {
    const mockClients = [{ id: 1, name: 'Test', title: '', avatar: '', quote: '' }];
    service.getClients().subscribe(clients => {
      expect(clients).toEqual(mockClients);
    });
    const req = httpMock.expectOne('/api/clients');
    expect(req.request.method).toBe('GET');
  });

  it('should fetch a client by id', () => {
    const mockClient = { id: 1, name: 'Test', title: '', avatar: '', quote: '' };
    service.getClient(1).subscribe(client => {
      expect(client).toEqual(mockClient);
    });
    const req = httpMock.expectOne('/api/clients/1');
    expect(req.request.method).toBe('GET');
  });

  it('should create a client', () => {
    const newClient = { name: 'New', title: '', avatar: '', quote: '' };
    const createdClient = { ...newClient, id: 2 };
    service.createClient(newClient).subscribe(client => {
      expect(client).toEqual(createdClient);
    });
    const req = httpMock.expectOne('/api/clients');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(newClient);
  });

  it('should update a client', () => {
    const update = { name: 'Updated' };
    const updatedClient = { id: 1, name: 'Updated', title: '', avatar: '', quote: '' };
    service.updateClient(1, update).subscribe(client => {
      expect(client).toEqual(updatedClient);
    });
    const req = httpMock.expectOne('/api/clients/1');
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual(update);
  });

  it('should delete a client', () => {
    const deletedClient = { id: 1, name: 'Deleted', title: '', avatar: '', quote: '' };
    service.deleteClient(1).subscribe(client => {
      expect(client).toEqual(deletedClient);
    });
    const req = httpMock.expectOne('/api/clients/1');
    expect(req.request.method).toBe('DELETE');
  });
});
