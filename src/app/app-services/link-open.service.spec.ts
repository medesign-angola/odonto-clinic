import { TestBed } from '@angular/core/testing';

import { LinkOpenService } from './link-open.service';

describe('LinkOpenService', () => {
  let service: LinkOpenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinkOpenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
