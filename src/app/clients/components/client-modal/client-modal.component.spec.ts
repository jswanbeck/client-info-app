import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { ClientDataService } from '../../services/client-data.service';
import { ClientModalComponent } from './client-modal.component';

describe('ClientModalComponent', () => {
  let component: ClientModalComponent;
  let fixture: ComponentFixture<ClientModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule],
      declarations: [ClientModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ClientModalComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit cancelled on cancel', () => {
    const spy = spyOn(component.cancelled, 'emit');
    const event = { stopPropagation: () => {} } as MouseEvent;
    component.onCancel(event);
    expect(spy).toHaveBeenCalled();
  });

  it('should emit submitted if type is create and name is set', () => {
    const spy = spyOn(ClientDataService.prototype, 'createClient').and.returnValue({
      subscribe: () => {},
    } as any);
    component.modalType = 'create';
    component.clientData = { name: 'Test' };
    component.onSubmit();
    expect(spy).toHaveBeenCalled();
  });

  it('should emit submitted if type is edit and name and selectedClient are set', () => {
    const spy = spyOn(ClientDataService.prototype, 'updateClient').and.returnValue({
      subscribe: () => {},
    } as any);
    component.modalType = 'edit';
    component.selectedClient = { id: 1, name: 'Test' } as any;
    component.clientData = { name: 'Test2' };
    component.onSubmit();
    expect(spy).toHaveBeenCalled();
  });

  it('should not emit submitted if name is empty', () => {
    const spy = spyOn(component.submitted, 'emit');
    component.clientData = { name: '' };
    component.onSubmit();
    expect(spy).not.toHaveBeenCalled();
  });
});
