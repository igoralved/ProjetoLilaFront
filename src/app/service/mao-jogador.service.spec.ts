import { TestBed } from '@angular/core/testing';

import { MaoJogadorService } from './mao-jogador.service';

describe('MaoJogadorService', () => {
  let service: MaoJogadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaoJogadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
