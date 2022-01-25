import { TestBed, inject } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { IniciaPartidaService } from './inicia-partida.service';
import { environment } from 'src/environments/environment';


describe('IniciaPartidaServiceService', () => {
  let httpTestingController: HttpTestingController;
  let service: IniciaPartidaService;
  let hash: string = 'eunaosei'

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[IniciaPartidaService]
    });
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(IniciaPartidaService);
    
  });

  it('deve ser capaz de criar um servico', inject([IniciaPartidaService], (service: IniciaPartidaService) => {

    expect(service).toBeDefined();
  }));


describe('get quantidade de jogadores',() => {

  it('deve chamar o get com URL válida',() => {
    service.getQuantidadeJogadores(hash).subscribe(quantidade => 
      expect(quantidade).toEqual(1));

      
  });
    
    const req = httpTestingController.expectOne(`${environment.API_URL}sala/numeroJogadores/`+
    hash);

    req.flush(1);

    httpTestingController.verify();
  })

});






