import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Client } from '../../models/client.model';
import { ClientInfoComponent } from './client-info.component';

const mockClient: Client = {
  id: 1,
  name: 'Test Client',
  title: 'Test Title',
  avatar: '',
  quote: 'Test quote',
};

describe('ClientInfoComponent', () => {
  let component: ClientInfoComponent;
  let fixture: ComponentFixture<ClientInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ClientInfoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ClientInfoComponent);
    component = fixture.componentInstance;
    component.client = mockClient; // Provide mock client
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
