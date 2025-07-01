import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Client } from '../../models/client.model';
import { ClientListComponent } from './client-list.component';

describe('ClientListComponent', () => {
  let component: ClientListComponent;
  let fixture: ComponentFixture<ClientListComponent>;

  const mockClient: Client = {
    id: 1,
    name: 'Test Client',
    title: 'Test Title',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ClientListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ClientListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit clientSelected when clientSelected.emit is called', () => {
    spyOn(component.clientSelected, 'emit');
    component.clientSelected.emit(mockClient);
    expect(component.clientSelected.emit).toHaveBeenCalledWith(mockClient);
  });
});
