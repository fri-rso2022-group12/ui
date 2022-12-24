import { TestBed } from '@angular/core/testing';

import { ModelVozilaService } from './model-vozila.service';

describe('ModelVozilaService', () => {
  let service: ModelVozilaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModelVozilaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
