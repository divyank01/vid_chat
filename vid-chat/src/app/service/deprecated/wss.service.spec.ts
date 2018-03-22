import { TestBed, inject } from '@angular/core/testing';

import { WssService } from './wss.service';

describe('WssService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WssService]
    });
  });

  it('should be created', inject([WssService], (service: WssService) => {
    expect(service).toBeTruthy();
  }));
});
