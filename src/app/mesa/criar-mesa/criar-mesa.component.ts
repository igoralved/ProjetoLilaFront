import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Jogador } from 'src/app/model/jogador';
import { Sala } from 'src/app/model/sala';
import { MesaService } from 'src/app/service/mesa.service';

@Component({
  selector: 'app-criar-mesa',
  templateUrl: './criar-mesa.component.html',
  styleUrls: ['./criar-mesa.component.scss'],
})
export class CriarMesaComponent implements OnInit {
  private jogador: Jogador;
  private sala: Sala;
  nick: string;

  constructor(private mesaService: MesaService, private router: Router) {
    this.jogador = {} as Jogador;
    this.sala = {} as Sala;
    this.nick = '';
  }

  click() {
    this.jogador = {
      nome: this.nick,
      cartasDoJogo: [],
      cartasObjetivo: [],
      cartasInicio: [],
      pontos: 0,
      coracaoPeq: 2,
      coracaoGra: 0,
      bonusCoracaoPeq: 0,
      bonusCoracaoGra: 0,
    };

    this.criarMesa();
  }

  criarMesa() {
    this.mesaService
      .iniciarHost(this.jogador)
      .subscribe((sala) => ((this.sala = sala), this.roteamento()));
  }

  roteamento() {
    this.router.navigate(['/mesa-criada', this.sala.hash]);
  }

  ngOnInit(): void {}
}
