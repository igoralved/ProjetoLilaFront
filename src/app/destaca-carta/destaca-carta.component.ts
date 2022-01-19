import { Component, OnInit } from '@angular/core';
import { Carta } from '../model/carta';
import { Jogador } from '../model/jogador';

@Component({
  selector: 'app-destaca-carta',
  templateUrl: './destaca-carta.component.html',
  styleUrls: ['./destaca-carta.component.scss']
})
export class DestacaCartaComponent implements OnInit {
  public listajogador: Array<Jogador> = [];
  public listaCartas: Array<Carta> = [];
  constructor() {

   }

  ngOnInit(): void {
  }

  public checaCoracaoPeq(filterBy: number): Jogador[]{
    return this.listajogador.filter((coracao: Jogador) =>
    coracao.coracaoPeq = filterBy);
  }

  public checaCoracaoGra(filterBy: number): Jogador[]{
    return this.listajogador.filter((coracao: Jogador) =>
    coracao.coracaoGra = filterBy);
  }

  public checaBonusPeq(filterBy: number): Jogador[]{
    return this.listajogador.filter((coracao: Jogador) =>
    coracao.bonusCoracaoPeq = filterBy);
  }

  public checaBonusGra(filterBy: number): Jogador[]{
    return this.listajogador.filter((coracao: Jogador) =>
    coracao.bonusCoracaoGra = filterBy);
  }

  public checaCompra(){

  }




}
