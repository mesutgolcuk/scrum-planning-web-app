import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrumMasterPanelComponent } from './scrum-master-panel.component';

describe('ScrumMasterPanelComponent', () => {
  let component: ScrumMasterPanelComponent;
  let fixture: ComponentFixture<ScrumMasterPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrumMasterPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrumMasterPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
