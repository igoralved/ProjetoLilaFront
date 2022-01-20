import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-habilita-dado',
  templateUrl: './habilita-dado.component.html',
  styleUrls: ['./habilita-dado.component.scss'],
})
export class HabilitaDadoComponent implements OnInit {
  public dice: number = 0;
  @ViewChild('dice')
  public dado: ElementRef<Element> | null = null;

  constructor() {}

  ngOnInit(): void {}

  rollDice() {
    const node = this.dado?.nativeElement;
    //Aqui vai o método que recebemos do back//
    const number = this.getRandomNumber(1, 6).toString();
    if (node instanceof HTMLElement) {
      this.toggleClasses(node);
      node.dataset['roll'] = number;
    }
  }

  toggleClasses(die: HTMLElement) {   
    die.classList.toggle('even-roll');
  }

  getRandomNumber(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
