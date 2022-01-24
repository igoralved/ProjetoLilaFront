import { Component, OnInit } from '@angular/core';
import { Baralho } from '../model/baralho';
import { CartaDoJogo } from '../model/cartaDoJogo';
import { CartaInicio } from '../model/cartaInicio';
import { CartaObjetivo } from '../model/cartaObjetivo';
import { Sala } from '../model/sala';
import { MesaJogoService } from '../service/mesa-jogo.service';

@Component({
  selector: 'app-area-de-compra',
  templateUrl: './area-de-compra.component.html',
  styleUrls: ['./area-de-compra.component.scss'],
})
export class AreaDeCompraComponent implements OnInit {
  public listaCartas: Array<CartaDoJogo> = [];
  public listaCartasInicio: Array<CartaInicio> = [];
  public listaCartasObjetivo: Array<CartaObjetivo> = [];
  public listaCartasDisponiveis: Array<CartaDoJogo> = [];
  public listaCartasDisponiveisObjetivo: Array<CartaObjetivo> = [];
  public listaCartasMao: Array<CartaDoJogo> = [];
  public listaCartasMaoObjetivo: Array<CartaObjetivo> = [];
  public baralho = {} as Baralho;
  public sala: Sala = {} as Sala;

  constructor(
    private mesaJogoService: MesaJogoService
  ) {}

  ngOnInit() {
    this.mesaJogoService.getemitSalaObservable().subscribe((sala) => {
      this.baralho = sala.baralho;
      this.listaCartas = this.baralho.cartasDoJogo;
      this.listaCartasObjetivo = this.baralho.cartasObjetivo;      
      this.setCartasDisponiveis();
    });
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
    if(this.listaCartasDisponiveis[indice].bonus){
      this.listaCartasMao.push(this.listaCartasDisponiveis[indice]);
      this.listaCartasDisponiveis.splice(indice, 1);
      this.setCartasDisponiveis();
      this.verificaBonus();
    }else {
    this.listaCartasMao.push(this.listaCartasDisponiveis[indice]);
    this.listaCartasDisponiveis.splice(indice, 1);
    this.setCartasDisponiveis();
    this.verificaBonus();
    this.mesaJogoService.comprarCarta(this.sala)
    }
  }

  public verificaBonus() {
    let existe = false;
    if (this.listaCartasMao.length > 0) {
      let ultimaCarta = this.listaCartasMao.length - 1;     
      if (this.listaCartasMao[ultimaCarta].bonus == true) {
        return existe = true;       
      }            
    }
    return existe;
  }
}
