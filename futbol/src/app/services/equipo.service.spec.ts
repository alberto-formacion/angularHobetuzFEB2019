import { TestBed } from '@angular/core/testing';

import { EquipoService } from './equipo.service';

describe('EquipoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EquipoService = TestBed.get(EquipoService);
    expect(service).toBeTruthy();
  });
});
