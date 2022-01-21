import { Component, OnInit } from '@angular/core';
import { Sala } from 'src/app/model/sala';
import { Jogador } from 'src/app/model/jogador';
import { IniciaPartidaService } from 'src/app/service/inicia-partida.service';
import { MesaJogoService } from 'src/app/service/mesa-jogo.service';
import { shareReplay } from 'rxjs';

@Component({
  selector: 'app-inicia-partida',
  templateUrl: './inicia-partida.component.html',
  styleUrls: ['./inicia-partida.component.scss']
})
export class IniciaPartidaComponent implements OnInit {
jogadores: any;
desabilitaBtn=true;
sala : Sala;
jogadorPrincipal: Jogador;
hash:string;

  constructor(private iniciaPartidaService: IniciaPartidaService,
              private mesaJogoService: MesaJogoService) {

    this.sala = {} as Sala;
    this.jogadorPrincipal = {} as Jogador;
    this.hash = this.sala.hash;
   }

  verificaQuantidadeJogadores(hash:string){
    this.jogadores = this.iniciaPartidaService.getQuantidadeJogadores(hash); 
    if(this.jogadores >=2){
      this.desabilitaBtn=false;
    }
     
  }

  enviaStatus():void{
      //this.sala.status==jogando;
      this.iniciaPartidaService.iniciaPartida(this.sala)
  }
 

  ngOnInit(): void {
    this.verificaQuantidadeJogadores(this.hash);
    this.mesaJogoService.getemitSalaObservable().subscribe(sala => this.sala = sala);
    // this.mesaJogoService.getemitJogadorObservable().subscribe(jogador => this.jogadorPrincipal = jogador);
    this.jogadorPrincipal = {
      nome:"Lila",
      bonusCoracaoGra:0,
      bonusCoracaoPeq:0,
      coracaoGra:0,
      coracaoPeq:2,
      isHost:true,
      listaDeCartas:[],
      listaDeObjetivos:[],
      pontos:0
    }
}

} 
