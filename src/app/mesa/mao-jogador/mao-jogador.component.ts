import { Component, OnInit } from '@angular/core';
import { CartaDoJogo } from 'src/app/model/cartaDoJogo';
import { CartaInicio } from 'src/app/model/cartaInicio';
import { CartaObjetivo } from 'src/app/model/cartaObjetivo';
import { Jogador } from 'src/app/model/jogador';
import { Sala } from 'src/app/model/sala';
import { CartaService } from 'src/app/service/cartas.service';
import { MesaService } from 'src/app/service/mesa.service';

@Component({
  selector: 'app-mao-jogador',
  templateUrl: './mao-jogador.component.html',
  styleUrls: ['./mao-jogador.component.scss'],
})
export class MaoJogadorComponent implements OnInit {
  public listaCartas: CartaDoJogo[] = [];
  public listaCartasInicio: CartaInicio[] = [];
  public listaCartasObjetivo: CartaObjetivo[] = [];
  private hash = '';
  public sala: Sala = {} as Sala;
  public listaJogador: Jogador[] = [];
  public jogador: Jogador= {} as Jogador;
  public cartaDoJogoDoJogador: CartaDoJogo = {} as CartaDoJogo;
  public cartaObjetivo: CartaObjetivo = {} as CartaObjetivo;


  constructor(
    private cartaService: CartaService,
    private mesaService: MesaService
  ) {
  }


  ngOnInit(): void {

      this.getListarCartas();
      this.getListarCartasInicio();
      this.getListarCartasObjetivo();
      this.getJogador();
      this.mesaService
        .findByHash('6g-Rg8V5')
        .subscribe(val => {
          this.sala = val;
            console.log(this.sala);
        }
      );
  }


  private getListarCartas(): void {
    this.cartaService
      .getListarCarta()
      .subscribe((listaCartas: CartaDoJogo[]) => {
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



  private getJogador(){


    var count= 0;
    for(var i in this.sala.jogadores) {
          this.listaJogador.push(this.sala.jogadores[i]);
            count++;
    }
    return this.listaJogador;

  }

  private mostrarCartasDoJogo(){
    this.getJogador();
    for (let i =0; this.listaJogador?.length < i; i++){
      this.listaJogador[i] = this.jogador
    }
    this.jogador.cartasDoJogo.push(this.cartaDoJogoDoJogador)
    return this.cartaDoJogoDoJogador;
  }

}
