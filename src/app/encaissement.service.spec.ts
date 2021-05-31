import { TestBed } from '@angular/core/testing';

import { EncaissementService } from './encaissement.service';

describe('EncaissementService', () => {
  let service: EncaissementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EncaissementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
