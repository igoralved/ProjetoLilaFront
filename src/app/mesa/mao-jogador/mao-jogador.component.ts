import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConnectableObservable } from 'rxjs';
import { Carta } from 'src/app/model/carta';
import { Jogador } from 'src/app/model/jogador';
import { Sala } from 'src/app/model/sala';
import { AreaDeCompraService } from 'src/app/service/area-de-compra.service';
import { CartaService } from 'src/app/service/cartas.service';
import { MesaJogoService } from 'src/app/service/mesa-jogo.service';
import { MesaService } from 'src/app/service/mesa.service';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-mao-jogador',
  templateUrl: './mao-jogador.component.html',
  styleUrls: ['./mao-jogador.component.scss'],
})
export class MaoJogadorComponent implements OnInit {
  private hash = '';
  public sala: Sala = {} as Sala;
  public listaJogador: Jogador[] = [];
  public jogador: Jogador = {} as Jogador;
  public listacartasMao: Array<Carta> = [];

  constructor(
    private mesaService: MesaService,
    private route: ActivatedRoute,
    private mesaJogoService: MesaJogoService,
    private areaCompraService: AreaDeCompraService
  ) {}

  ngOnInit(): void {
    // caminho para acessar a partir de outros componentes
    this.hash = String(this.route.snapshot.paramMap.get('hash'));
    this.mesaJogoService.getemitJogadorObservable().subscribe((jogador)=> this.jogador = jogador)

    this.mesaService.findByHash(this.hash).subscribe((val) => {
      this.sala = val;
    });

    this.escutaEventoCompra();
  }

  public escutaEventoCompra(): void {
    this.areaCompraService.emitirCartaJogo.subscribe((listacartasMao: Carta[]) => this.listacartasMao = listacartasMao)
  }

  public verificarCoracoesPeq(): Boolean{
    this.mesaJogoService.getemitJogadorObservable().subscribe((jogador) => this.jogador.coracaoPeq = jogador.coracaoPeq);
    return this.jogador.coracaoPeq >= 4;
  }

  public verificarCoracoesGra():Boolean{
    this.mesaJogoService.getemitJogadorObservable().subscribe((jogador) => this.jogador.coracaoGra = jogador.coracaoGra);
    return this.jogador.coracaoGra >= 4;
  }
  
  public verificarCoracoesQualquerTamanho(): Boolean {
    let coracoes = 0;
   
    this.mesaJogoService.getemitJogadorObservable().subscribe((jogador) => coracoes = jogador.coracaoGra +
    jogador.coracaoPeq + jogador.bonusCoracaoGra + jogador.bonusCoracaoPeq);
    return coracoes >=5;
  }
  
  public verificaCompra({ valorCorPequeno, valorCorGrande }: Partial<Carta>): boolean{
    let coracaoP = 0;
    let coracaoG = 0;
    this.mesaJogoService.getemitJogadorObservable().subscribe((jogador) => {coracaoP = jogador.coracaoPeq + jogador.bonusCoracaoPeq; 
      coracaoG = jogador.coracaoGra + jogador.bonusCoracaoGra});
    return (valorCorPequeno! <= coracaoP) && (valorCorGrande! <= coracaoG);
  }
}
