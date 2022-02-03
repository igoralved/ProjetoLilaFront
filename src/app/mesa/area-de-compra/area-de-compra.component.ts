import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MaoJogadorComponent } from '../mao-jogador/mao-jogador.component';
import { Baralho } from '../../model/baralho';

import { CartaDoJogo } from '../../model/cartaDoJogo';
import { CartaObjetivo } from '../../model/cartaObjetivo';
import { Jogador } from '../../model/jogador';
import { Sala } from '../../model/sala';
import { AreaDeCompraService } from '../../service/area-de-compra.service';
import { MesaJogoService } from '../../service/mesa-jogo.service';
@Component({
  selector: 'app-area-de-compra',
  templateUrl: './area-de-compra.component.html',
  styleUrls: ['./area-de-compra.component.scss'],
})
export class AreaDeCompraComponent implements OnInit {
  private hash = '';
  public sala: Sala = {} as Sala;
  public baralho: Baralho = {} as Baralho;

  public listaCartas: Array<CartaDoJogo> = [];

  public listaCartasObjetivo: Array<CartaObjetivo> = [];
  public listaCartasDisponiveis: Array<CartaDoJogo> = [];
  public listaCartasDisponiveisObjetivo: Array<CartaObjetivo> = [];
  public listaCartasMao: Array<CartaDoJogo> = [];
  public listaCartasMaoObjetivo: Array<CartaObjetivo> = [];
  public jogador: Jogador = {} as Jogador;
  public bonus = false;

  constructor(
    private mesaJogoService: MesaJogoService,
    private maoJogador: MaoJogadorComponent,
    private route: ActivatedRoute,
    private areaCompraService: AreaDeCompraService
  ) {}

  ngOnInit() {
    //add
    this.hash = String(this.route.snapshot.paramMap.get('hash'));
    this.mesaJogoService.getemitSalaObservable().subscribe((sala) => {
      this.sala = sala;
      this.listaCartasDisponiveis = sala.baralho.cartasDoJogo;
      this.listaCartasDisponiveisObjetivo = sala.baralho.cartasObjetivo;
      this.setCartasDisponiveis();
      console.log(sala);
      this.jogador = {
        ...sala.jogadores.find((jogador) => jogador.status == 'JOGANDO'),
      } as Jogador;
    });

    //this.getListarCartas();
    //this.getListarCartasInicio();
    //this.getListarCartasObjetivo();
    //console.log(this.comprarCarta);
  }

  public setCartasObjetivo(): void {
    const indiceRandomico: number = Math.round(
      Math.random() * (this.listaCartasObjetivo.length - 1 - 0) + 0
    );
    this.listaCartasDisponiveisObjetivo.push(
      this.listaCartasObjetivo[indiceRandomico]
    );
    this.listaCartasObjetivo.splice(indiceRandomico, 1);
  }

  public setCartasDisponiveis(): void {
    const cartasFaltantes: number = 6 - this.listaCartasDisponiveis.length;

    for (let i = 0; i < cartasFaltantes; i++) {
      const indiceRandomico: number = Math.round(
        Math.random() * (this.listaCartas.length - 1 - 0) + 0
      );
      this.listaCartasDisponiveis.push(this.listaCartas[indiceRandomico]);
      this.listaCartas.splice(indiceRandomico, 1);
    }
  }

  public comprarCarta(indice: number): void {
    this.jogador?.cartasDoJogo.push(this.listaCartasDisponiveis[indice]);
    this.listaCartasDisponiveis.splice(indice, 1);
    this.areaCompraService.emitirCartaJogo.emit(this.jogador?.cartasDoJogo);
    this.setCartasDisponiveis();
    this.mesaJogoService
      .comprarCartas(this.sala)
      .subscribe((sala) => (this.sala = sala));
    this.bonus = this.verificaBonus();
  }

  public comprarCoracaoP(){
      this.mesaJogoService.comprarCoracaoP(this.sala).subscribe((sala) => (this.sala = sala));
  }

  public comprarCoracaoG(){
    this.mesaJogoService.comprarCoracaoG(this.sala).subscribe((sala) => (this.sala = sala));
  }

  public desabilitarCoracoesPeq(): boolean {
    if (this.maoJogador.verificarCoracoesPeq()) {
      return true;
    }
    return false;
  }
  public desabilitarCoracoesGra(): boolean {
    if (this.maoJogador.verificarCoracoesGra()) {
      this.mesaJogoService.comprarCoracaoP(this.sala).subscribe((sala) => (this.sala = sala));
      return true;
    }
    return false;
  }

  public desabilitarCoracoes(): boolean {
    if (this.maoJogador.verificarCoracoesQualquerTamanho()) {
      return true;
    }
    return false;
  }

  public podeComprar(carta: CartaDoJogo): boolean {
    return this.maoJogador.verificaCompra(carta);
  }

  public verificaBonus() {
    if (this.jogador?.cartasDoJogo.length > 0) {
      let ultimaCarta = (this.jogador?.cartasDoJogo.length - 1) as number;
      if (this.jogador?.cartasDoJogo[ultimaCarta].bonus == true) {
        return true;
      }
    }
    return false;
  }
}
