import { TestBed } from '@angular/core/testing';

import { ProizvajalecService } from './proizvajalec.service';

describe('ProizvajalecService', () => {
  let service: ProizvajalecService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProizvajalecService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
