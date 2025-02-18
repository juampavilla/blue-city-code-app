import { TestBed } from '@angular/core/testing';

import { MediumPostsService } from './medium-posts.service.ts.bak';

describe('MediumPostsService', () => {
  let service: MediumPostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediumPostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
