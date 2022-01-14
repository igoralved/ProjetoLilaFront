import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Jogador } from 'src/app/model/jogador';
import { Sala } from 'src/app/model/sala';
import { CartaService } from 'src/app/service/cartas.service';
import { MesaJogoService } from 'src/app/service/mesa-jogo.service';
import { MesaService } from 'src/app/service/mesa.service';

@Component({
  selector: 'app-mao-jogador',
  templateUrl: './mao-jogador.component.html',
  styleUrls: ['./mao-jogador.component.scss'],
})
export class MaoJogadorComponent implements OnInit {
  private hash = '';
  public sala: Sala = {} as Sala;
  public listaJogador: Jogador[] = [];
  public jogador: Jogador = {} as Jogador;

  constructor(
    private mesaService: MesaService,
    private route: ActivatedRoute,
    private mesaJogoService: MesaJogoService
  ) {}

  ngOnInit(): void {
    // caminho para acessar a partir de outros componentes
    this.hash = String(this.route.snapshot.paramMap.get('hash'));
    this.mesaJogoService.getemitJogadorObservable().subscribe((jogador)=> this.jogador = jogador)   

    this.mesaService.findByHash(this.hash).subscribe((val) => {
      this.sala = val;
      console.log(this.sala);
    });
  }
}
