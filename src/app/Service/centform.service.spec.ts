import { TestBed } from '@angular/core/testing';

import { CentformService } from './centform.service';

describe('CentformService', () => {
  let service: CentformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CentformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
