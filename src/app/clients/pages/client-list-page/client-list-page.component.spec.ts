import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsModule } from '../../clients.module';
import { ClientListPageComponent } from './client-list-page.component';

describe('ClientListPageComponent', () => {
  let component: ClientListPageComponent;
  let fixture: ComponentFixture<ClientListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ClientsModule],
      declarations: [ClientListPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ClientListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default values', () => {
    expect(component.clients).toEqual([]);
    expect(component.selectedClient).toBeNull();
    expect(component.searchTerm).toBe('');
    expect(component.showModal).toBe(false);
    expect(component.modalType).toBe('create');
    expect(component.activeFilters).toEqual([]);
  });

  it('should clear filters', () => {
    component.activeFilters = [{ key: 'filter field', value: 'filter value' }];
    component.filterField = 'filter field';
    component.filterValue = 'filter value';
    component.searchTerm = 'test';
    component.clearFilters();
    expect(component.activeFilters).toEqual([]);
    expect(component.filterField).toBe('');
    expect(component.filterValue).toBe('');
    expect(component.searchTerm).toBe('');
  });

  it('should filter clients by searchTerm', () => {
    component.clients = [
      { id: 1, name: 'Client One', title: 'Engineer' },
      { id: 2, name: 'Client Two', title: 'Manager' },
    ];
    component.searchTerm = 'two';
    expect(component.filteredClients.length).toBe(1);
    expect(component.filteredClients[0].name).toBe('Client Two');
  });

  it('should filter clients by activeFilters', () => {
    component.clients = [
      { id: 1, name: 'Client One', title: 'Engineer' },
      { id: 2, name: 'Client Two', title: 'Manager' },
      { id: 3, name: 'Client Three', title: 'Engineer' },
    ];
    component.activeFilters = [{ key: 'title', value: 'engineer' }];
    expect(component.filteredClients.length).toBe(2);
    expect(component.filteredClients.map(c => c.name)).toEqual(['Client One', 'Client Three']);
  });

  it('should filter clients by filterField and filterValue', () => {
    component.clients = [
      { id: 1, name: 'Client One', title: 'Engineer' },
      { id: 2, name: 'Client Two', title: 'Manager' },
    ];
    component.filterField = 'title';
    component.filterValue = 'manager';
    expect(component.filteredClients.length).toBe(1);
    expect(component.filteredClients[0].name).toBe('Client Two');
  });
});
