import { TestBed } from '@angular/core/testing';

import { DatosPacienteService } from './datos-paciente.service';

describe('DatosPacienteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatosPacienteService = TestBed.get(DatosPacienteService);
    expect(service).toBeTruthy();
  });
});
