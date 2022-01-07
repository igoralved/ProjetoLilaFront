import { Component, OnInit } from '@angular/core';
import { Carta } from '../model/carta';
import { CartaInicio } from '../model/cartaInicio';
import { CartaObjetivo } from '../model/cartaObjetivo';
import { CartaService } from '../service/cartas.service';

@Component({
  selector: 'app-montar-cartas',
  templateUrl: './montar-cartas.component.html',
  styleUrls: ['./montar-cartas.component.scss'],
})
export class MontarCartasComponent implements OnInit {
  public listaCartas: Array<Carta> = [];
  public listaCartasInicio: Array<CartaInicio> = [];
  public listaCartasObjetivo: Array<CartaObjetivo> = [];

  constructor(private cartaService: CartaService) {}

  ngOnInit() {
    this.getListarCartas();
    this.getListarCartasInicio();
    this.getListarCartasObjetivo();
  }

  private getListarCartas(): void {
    this.cartaService.getListarCarta().subscribe((listaCartas: Carta[]) => {
      this.listaCartas = listaCartas;
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
