import { Component, OnInit } from '@angular/core';
import { CartaDoJogo } from 'src/app/model/cartaDoJogo';
import { CartaInicio } from 'src/app/model/cartaInicio';
import { CartaObjetivo } from 'src/app/model/cartaObjetivo';
import { CartaService } from 'src/app/service/cartas.service';

@Component({
  selector: 'app-mesa-jogo',
  templateUrl: './mesa-jogo.component.html',
  styleUrls: ['./mesa-jogo.component.scss']
})
export class MesaJogoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {   
  }
  
}
