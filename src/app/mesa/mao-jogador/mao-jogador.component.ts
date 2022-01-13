import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  
  private hash = '';
  public sala: Sala = {} as Sala;
  public listaJogador: Jogador[] = [];
  public jogador: Jogador= {} as Jogador;
  


  constructor(
    private cartaService: CartaService,
    private mesaService: MesaService,
    private route: ActivatedRoute
  ) {
  }


  ngOnInit(): void {
      this.hash = String(this.route.snapshot.paramMap.get('hash'));      
      
      this.mesaService
        .findByHash('6g-Rg8V5')
        .subscribe(val => {
          this.sala = val;
            console.log(this.sala);
        }
      );
  }
}
