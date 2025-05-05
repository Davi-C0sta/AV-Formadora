import { TestBed } from '@angular/core/testing';

import { FrasesAPIService } from './frases-api.service';

describe('FrasesAPIService', () => {
  let service: FrasesAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrasesAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
