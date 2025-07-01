import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandablePanelComponent } from './expandable-panel.component';

describe('ExpandablePanelComponent', () => {
  let component: ExpandablePanelComponent;
  let fixture: ComponentFixture<ExpandablePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExpandablePanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExpandablePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit closed when close is called', () => {
    spyOn(component.closed, 'emit');
    component.close();
    expect(component.closed.emit).toHaveBeenCalled();
  });
});
