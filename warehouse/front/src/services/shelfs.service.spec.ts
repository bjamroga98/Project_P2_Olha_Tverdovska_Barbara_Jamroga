import { TestBed } from '@angular/core/testing';

import { ShelfsService } from './shelfs.service';

describe('ShelfsService', () => {
  let service: ShelfsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShelfsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
