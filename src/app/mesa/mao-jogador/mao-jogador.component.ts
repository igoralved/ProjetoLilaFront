import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConnectableObservable } from 'rxjs';
import { CartaDoJogo } from 'src/app/model/cartaDoJogo';
import { Jogador } from 'src/app/model/jogador';
import { Sala } from 'src/app/model/sala';
import { AreaDeCompraService } from 'src/app/service/area-de-compra.service';
import { CartaService } from 'src/app/service/cartas.service';
import { MesaJogoService } from 'src/app/service/mesa-jogo.service';
import { MesaService } from 'src/app/service/mesa.service';

@Injectable({
  providedIn: 'root',
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
  public listacartasMao: Array<CartaDoJogo> = [];

  constructor(
    private mesaService: MesaService,
    private route: ActivatedRoute,
    private mesaJogoService: MesaJogoService,
    private areaCompraService: AreaDeCompraService
  ) {}

  ngOnInit(): void {
    // caminho para acessar a partir de outros componentes
    this.hash = String(this.route.snapshot.paramMap.get('hash'));
    this.mesaJogoService.getemitJogadorObservable().subscribe((jogador) => {
      this.mesaJogoService.getemitSalaObservable().subscribe((sala) => {
        this.sala = sala;
        this.jogador = jogador;
        this.escutaEventoCompra();
        this.mesaJogoService.setJogadorAtualNaMesa(this.jogador);
      });
    });

    this.mesaService.findByHash(this.hash).subscribe((val) => {
      this.sala = val;
    });
  }

  public escutaEventoCompra(): void {
    this.areaCompraService.emitirCartaJogo.subscribe(
      (listacartasMao: CartaDoJogo[]) =>
        (this.jogador.cartasDoJogo = listacartasMao)
    );
    this.mesaJogoService.getemitSalaObservable().subscribe((sala) => {
      this.jogador = this.sala.jogadores.find((jogador) => jogador.id == this.jogador.id) as Jogador;
      console.warn('JOGADOR NOME: '+this.jogador.nome)
    });   
  }

  public verificarCoracoesPeq(): Boolean {
    this.mesaJogoService
      .getemitJogadorObservable()
      .subscribe((jogador) => (this.jogador.coracaoPeq = jogador.coracaoPeq));
    return this.jogador.coracaoPeq >= 4;
  }

  public verificarCoracoesGra(): Boolean {
    this.mesaJogoService
      .getemitJogadorObservable()
      .subscribe((jogador) => (this.jogador.coracaoGra = jogador.coracaoGra));
    return this.jogador.coracaoGra >= 4;
  }

  public verificarCoracoesQualquerTamanho(): Boolean {
    let coracoes = 0;

    this.mesaJogoService
      .getemitJogadorObservable()
      .subscribe(
        (jogador) =>
          (coracoes =
            jogador.coracaoGra +
            jogador.coracaoPeq +
            jogador.bonusCoracaoGra +
            jogador.bonusCoracaoPeq)
      );
    return coracoes >= 5;
  }

  public verificaCompra({
    valorCorPequeno,
    valorCorGrande,
  }: Partial<CartaDoJogo>): boolean {
    let coracaoP = 0;
    let coracaoG = 0;
    this.mesaJogoService.getemitJogadorObservable().subscribe((jogador) => {
      coracaoP = jogador.coracaoPeq + jogador.bonusCoracaoPeq;
      coracaoG = jogador.coracaoGra + jogador.bonusCoracaoGra;
    });
    return valorCorPequeno! <= coracaoP && valorCorGrande! <= coracaoG;
  }
}
