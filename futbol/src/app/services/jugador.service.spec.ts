import { TestBed } from '@angular/core/testing';

import { JugadorService } from './jugador.service';

describe('JugadorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JugadorService = TestBed.get(JugadorService);
    expect(service).toBeTruthy();
  });
});
