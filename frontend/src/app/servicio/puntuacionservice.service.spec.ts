import { TestBed } from '@angular/core/testing';

import { PuntuacionserviceService } from './puntuacionservice.service';

describe('PuntuacionserviceService', () => {
  let service: PuntuacionserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PuntuacionserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
