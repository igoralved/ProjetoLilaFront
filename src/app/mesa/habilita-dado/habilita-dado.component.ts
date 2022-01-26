import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Sala } from 'src/app/model/sala';
import { MesaJogoService } from 'src/app/service/mesa-jogo.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';


@Component({
  selector: 'app-habilita-dado',
  templateUrl: './habilita-dado.component.html',
  styleUrls: ['./habilita-dado.component.scss'],
  animations: [
    trigger('openClose', [      
      state('open', style({        
        opacity: 1,        
      })),
      state('closed', style({
        opacity: 0,       
      })),
      transition('open => closed', [
        animate('0.5s')
      ]),
      transition('closed => open', [
        animate('1s')
      ]),
    ]),
  ],
})


export class HabilitaDadoComponent implements OnInit {
 
  @ViewChild('dice')
  public dado: ElementRef<Element> ={} as ElementRef;
  public sala: Sala = {} as Sala;
  
  constructor(private mesaJogoService: MesaJogoService) {     
  }
  
  ngOnInit(): void {
    this.mesaJogoService
      .getemitSalaObservable()
      .subscribe((sala) => (this.sala = sala));      
  }

  rolarDado() {
    //TODO: método para buscar do back
    // this.mesaJogoService.comprarCarta(this.sala).subscribe(sala => {this.sala = sala})
    // const number = this.sala.dado + '';
    const node = this.dado.nativeElement;      
    const number = this.gerarNumeroAleatorio(1,6).toString();
    console.warn(number)
    if (node instanceof HTMLElement) {
      this.trocarClasses(node);
      node.dataset['roll'] = number;
    }
  }  
  
  trocarClasses(die: HTMLElement) {
    die.classList.toggle('even-roll');    
  }  

  gerarNumeroAleatorio(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
