import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MaoJogadorComponent } from '../mesa/mao-jogador/mao-jogador.component';
import { Baralho } from '../model/baralho';
import { CartaDoJogo } from '../model/cartaDoJogo';
import { CartaInicio } from '../model/cartaInicio';
import { CartaObjetivo } from '../model/cartaObjetivo';
import { Sala } from '../model/sala';
import { CartaService } from '../service/cartas.service';
import { MesaJogoService } from '../service/mesa-jogo.service';
import { MesaService } from '../service/mesa.service';

@Component({
  selector: 'app-area-de-compra',
  templateUrl: './area-de-compra.component.html',
  styleUrls: ['./area-de-compra.component.scss'],
})
export class AreaDeCompraComponent implements OnInit {
  //add
  private hash = '';
  public sala: Sala = {} as Sala;
  public baralho: Baralho = {} as Baralho;

  public listaCartas: Array<CartaDoJogo> = [];
  //public listaCartasInicio: Array<CartaInicio> = [];
  public listaCartasObjetivo: Array<CartaObjetivo> = [];
  public listaCartasDisponiveis: Array<CartaDoJogo> = [];
  public listaCartasDisponiveisObjetivo: Array<CartaObjetivo> = [];
  public listaCartasMao: Array<CartaDoJogo> = [];
  public listaCartasMaoObjetivo: Array<CartaObjetivo> = [];
  public coracoes: Array<any> = [];

  constructor(private cartaService: CartaService,
              private mesaService: MesaService,
              private mesaJogoService: MesaJogoService,
              private maoJogador: MaoJogadorComponent,
              private route: ActivatedRoute,) {}

  ngOnInit() {
    //add
    this.hash = String(this.route.snapshot.paramMap.get('hash'));
    this.mesaJogoService.getemitSalaObservable().subscribe(sala => {
      this.baralho = sala.baralho;
      this.listaCartas = this.baralho.cartaDoJogo;
      this.listaCartasObjetivo = this.baralho.cartaObjetivo;
      this.setCartasDisponiveis();
    })
    //this.getListarCartas();
    //this.getListarCartasInicio();
    //this.getListarCartasObjetivo();
  }

  public setCartasObjetivo(): void {
      const indiceRandomico: number = Math.round(
        Math.random() * (this.listaCartasObjetivo.length - 1 - 0) + 0
      );
      this.listaCartasDisponiveisObjetivo.push(this.listaCartasObjetivo[indiceRandomico]);
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
    this.listaCartasMao.push(this.listaCartasDisponiveis[indice]);
    this.listaCartasDisponiveis.splice(indice, 1);
    this.setCartasDisponiveis();
  }

  public desabilitarCoracoesPeq(): boolean {
    if(this.maoJogador.verificarCoracoesPeq()){
      return true;
    }
    return false;
  }

  public desabilitarCoracoes(): boolean {
    if(this.maoJogador.verificarCoracoesQualquerTamanho()){
      return false;
    }
    return true;
  }



  /* private getListarCartas(): void {
    this.cartaService.getListarCarta().subscribe((listaCartas: Carta[]) => {
      this.listaCartas = listaCartas;
      this.setCartasDisponiveis();
    });
  } */

  /* private getListarCartasInicio(): void {
    this.cartaService
      .getListarCartaInicio()
      .subscribe((listaCartasInicio: CartaInicio[]) => {
        this.listaCartasInicio = listaCartasInicio;
      });
  } */

  /* private getListarCartasObjetivo(): void {
    this.cartaService
      .getListarCartaObjetivo()
      .subscribe((listaCartasObjetivo: CartaObjetivo[]) => {
        this.listaCartasObjetivo = listaCartasObjetivo;
      });
  } */
}
