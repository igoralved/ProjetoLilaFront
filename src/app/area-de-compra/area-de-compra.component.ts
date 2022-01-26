import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Baralho } from '../model/baralho';
import { CartaDoJogo } from '../model/cartaDoJogo';
import { CartaObjetivo } from '../model/cartaObjetivo';
import { Sala } from '../model/sala';
import { MesaJogoService } from '../service/mesa-jogo.service';

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
  public coracoes: Array<any> = [];

  constructor(private mesaJogoService: MesaJogoService, 
              private route: ActivatedRoute,) {}

  ngOnInit() {
    this.hash = String(this.route.snapshot.paramMap.get('hash'));
    this.mesaJogoService.getemitSalaObservable().subscribe(sala => {
      this.baralho = sala.baralho;
      this.listaCartas = this.baralho.cartasDoJogo;

      this.listaCartasObjetivo = this.baralho.cartasObjetivo;
      console.warn(this.listaCartasObjetivo);
      this.setCartasDisponiveis();
    })
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
}
