import { TestBed } from '@angular/core/testing';

import { StoryListService } from './story-list.service';

describe('StoryListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StoryListService = TestBed.get(StoryListService);
    expect(service).toBeTruthy();
  });
});
