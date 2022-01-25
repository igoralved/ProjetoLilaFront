import { Injectable } from '@angular/core';
import { Jogador } from '../model/jogador';

@Injectable({
  providedIn: 'root'
})
export class MaoJogadorService {

  jogador: Jogador = {} as Jogador;

  constructor() {}

  public verificarCoracoes(): boolean{
    if(this.jogador.coracaoPeq >= 4){
      return true;
    }
    return false;
  }
}
