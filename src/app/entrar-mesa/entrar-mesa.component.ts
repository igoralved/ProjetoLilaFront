import { SalaRequest } from './../model/salaRequest';
import { JogadorService } from './../service/jogador.service';
import { MesaService } from './../service/mesa.service';
import { Sala } from 'src/app/model/sala';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Jogador } from '../model/jogador';

@Component({
  selector: 'app-entrar-mesa',
  templateUrl: './entrar-mesa.component.html',
  styleUrls: ['./entrar-mesa.component.scss']
})
export class EntrarMesaComponent implements OnInit {

  constructor(private route: ActivatedRoute, private mesaService:MesaService, private jogadorservice: JogadorService) {
    this.sala = {} as Sala;
    this.jogador = {} as Jogador;
  }

  ngOnInit(): void {
    this.hash = String(this.route.snapshot.paramMap.get('hash'));

    this.mesaService
      .findByHash(this.hash)
      .subscribe((sala) => (this.sala = sala));

  }

  hash = '';
  sala: Sala;
  nick =  '';
  jogador: Jogador;



  conectar(){
    this.jogador.nome = this.nick;
    this.jogadorservice.salvarJogador(this.jogador);

    let salarequest = {
      jogador:this.jogador,
      hash: this.hash
    } as SalaRequest;

    this.mesaService.conectarNovoJogador(salarequest);

    this.mesaService.connectWebsocket(this.hash);

  }

}



