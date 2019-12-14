import { TestBed } from '@angular/core/testing';

import { ScrumMasterPanelService } from './scrum-master-panel.service';

describe('ScrumMasterPanelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScrumMasterPanelService = TestBed.get(ScrumMasterPanelService);
    expect(service).toBeTruthy();
  });
});
