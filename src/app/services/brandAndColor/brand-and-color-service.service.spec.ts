import { TestBed } from '@angular/core/testing';

import { BrandAndColorServiceService } from './brand-and-color-service.service';

describe('BrandAndColorServiceService', () => {
  let service: BrandAndColorServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrandAndColorServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
