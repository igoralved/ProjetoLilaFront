import { TestBed } from '@angular/core/testing';

import { IniciaPartidaService } from './inicia-partida.service';

describe('IniciaPartidaServiceService', () => {
  let service: IniciaPartidaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IniciaPartidaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
