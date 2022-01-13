import { Component, OnInit } from '@angular/core';
import { Carta } from '../model/carta';
import { CartaInicio } from '../model/cartaInicio';
import { CartaObjetivo } from '../model/cartaObjetivo';
import { CartaService } from '../service/cartas.service';

@Component({
  selector: 'app-area-de-compra',
  templateUrl: './area-de-compra.component.html',
  styleUrls: ['./area-de-compra.component.scss'],
})
export class AreaDeCompraComponent implements OnInit {
  public listaCartas: Array<Carta> = [];
  public listaCartasInicio: Array<CartaInicio> = [];
  public listaCartasObjetivo: Array<CartaObjetivo> = [];
  public listaCartasDisponiveis: Array<Carta> = [];

  constructor(private cartaService: CartaService) {}

  ngOnInit() {
    this.getListarCartas();
    this.getListarCartasInicio();
    this.getListarCartasObjetivo();
  }

  public setcartasObjetivo(): void {}

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

  private getListarCartas(): void {
    this.cartaService.getListarCarta().subscribe((listaCartas: Carta[]) => {
      this.listaCartas = listaCartas;
      this.setCartasDisponiveis();
    });
  }

  private getListarCartasInicio(): void {
    this.cartaService
      .getListarCartaInicio()
      .subscribe((listaCartasInicio: CartaInicio[]) => {
        this.listaCartasInicio = listaCartasInicio;
      });
  }

  private getListarCartasObjetivo(): void {
    this.cartaService
      .getListarCartaObjetivo()
      .subscribe((listaCartasObjetivo: CartaObjetivo[]) => {
        this.listaCartasObjetivo = listaCartasObjetivo;
      });
  }
}
