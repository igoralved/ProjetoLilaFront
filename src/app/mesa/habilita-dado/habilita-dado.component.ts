import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Sala } from 'src/app/model/sala';
import { MesaJogoService } from 'src/app/service/mesa-jogo.service';

@Component({
  selector: 'app-habilita-dado',
  templateUrl: './habilita-dado.component.html',
  styleUrls: ['./habilita-dado.component.scss'],
})
export class HabilitaDadoComponent implements OnInit {
  public dice: number = 0;
  @ViewChild('dice')
  public dado: ElementRef<Element> | null = null;
  public sala: Sala = {} as Sala;
  constructor(private mesaJogoService: MesaJogoService) {}

  ngOnInit(): void {}

  rolarDado() {
    const node = this.dado?.nativeElement;
    this.mesaJogoService.comprarCarta(this.sala)
    //Aqui vai o método que recebemos do back//
    const number = this.sala.dado.toString();
    if (node instanceof HTMLElement) {
      this.trocarClasses(node);
      node.dataset['roll'] = number;
    }
  }

  trocarClasses(die: HTMLElement) {   
    die.classList.toggle('even-roll');
  }

  getRandomNumber(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
