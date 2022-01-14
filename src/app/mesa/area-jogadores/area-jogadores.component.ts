import { Component, OnInit } from '@angular/core';
import { Jogador } from 'src/app/model/jogador';
import { Sala } from 'src/app/model/sala';
import { MesaJogoService } from 'src/app/service/mesa-jogo.service';
import { ModalService } from 'src/app/service/modal.service';

@Component({
  selector: 'app-area-jogadores',
  templateUrl: './area-jogadores.component.html',
  styleUrls: ['./area-jogadores.component.scss'],
})
export class AreaJogadoresComponent implements OnInit {
  jogadores: Jogador[] = new Array();
  sala: Sala = {} as Sala;
  jogadorPrincipal: Jogador = {} as Jogador;

  constructor(
    private modal: ModalService,
    private mesaJogoService: MesaJogoService
  ) {}

  ngOnInit(): void {
    this.mesaJogoService.getemitSalaObservable().subscribe((sala) => {
      this.sala = sala;
      console.warn(sala);
    });

    this.mesaJogoService.getemitJogadorObservable().subscribe((jogador) => {
      this.jogadorPrincipal = jogador;
      console.warn(jogador);
    });

    // this.jogadores = this.sala.jogadores;

    // //mock para testes
    let jog1 = { nome: "Joao" } as Jogador;
    let jog2 = { nome: "Felipe" } as Jogador;
    let jog3 = { nome: "Gabriel" } as Jogador;
    let jog4 = { nome: "Carol" } as Jogador;
    let jog5 = { nome: "Lila" } as Jogador;

    this.jogadores.push(jog1);
    this.jogadores.push(jog2);
    this.jogadores.push(jog3);
    this.jogadores.push(jog4);
    this.jogadores.push(jog5);
  }

  abrirModal() {
    this.modal.abrir('mao-jogador');
  }

  fecharModal() {
    this.modal.fechar('mao-jogador');
  }
}
