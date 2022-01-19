import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habilita-dado',
  templateUrl: './habilita-dado.component.html',
  styleUrls: ['./habilita-dado.component.scss'],
})
export class HabilitaDadoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public dice: number = 0;

  diceNumber(min: number, max: number) {
    this.dice = Math.floor(Math.random() * (max - min + 1)) + min;
    return this.dice;
  }

  rollDice() {
    const dice = [document.querySelectorAll('.die-list')];
    dice.forEach((die) => {
      this.toggleClasses(die);
      this.getRandomNumber(1, 6);
      console.log(die);
    });
  }

  toggleClasses(die: any) {
    die.classList.toggle('odd-roll');
    die.classList.toggle('even-roll');
  }

  getRandomNumber(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
