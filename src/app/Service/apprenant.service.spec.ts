import { TestBed } from '@angular/core/testing';

import { ApprenantService } from './apprenant.service';

describe('ApprenantService', () => {
  let service: ApprenantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApprenantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
