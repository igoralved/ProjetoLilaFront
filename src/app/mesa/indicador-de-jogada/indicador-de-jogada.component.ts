import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-indicador-de-jogada',
  templateUrl: './indicador-de-jogada.component.html',
  styleUrls: ['./indicador-de-jogada.component.scss']
})
export class IndicadorDeJogadaComponent implements OnInit {
@Input() mensagem="";
  constructor() { }

  ngOnInit(): void {
  }

}
function input() {
  throw new Error('Function not implemented.');
}

