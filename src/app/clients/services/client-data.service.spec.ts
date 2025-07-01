import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ClientDataService } from './client-data.service';

describe('ClientDataService', () => {
  let service: ClientDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ClientDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
