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
  custom1: 'foo',
  custom2: 42,
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
    component.client = mockClient;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should compute customProperties', () => {
    const expected = [
      { key: 'custom1', value: 'foo' },
      { key: 'custom2', value: 42 },
    ];
    component.ngOnChanges({
      client: {
        currentValue: mockClient,
        previousValue: null,
        firstChange: false,
        isFirstChange: () => false,
      },
    });
    expect(component.customProperties).toEqual(expected);
  });

  it('should emit clientSelect when onClick is called', () => {
    spyOn(component.clientSelect, 'emit');
    component.onClick();
    expect(component.clientSelect.emit).toHaveBeenCalledWith(mockClient);
  });
});
