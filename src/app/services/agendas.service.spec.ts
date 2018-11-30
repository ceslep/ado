import { TestBed } from '@angular/core/testing';

import { AgendasService } from './agendas.service';

describe('AgendasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AgendasService = TestBed.get(AgendasService);
    expect(service).toBeTruthy();
  });
});
