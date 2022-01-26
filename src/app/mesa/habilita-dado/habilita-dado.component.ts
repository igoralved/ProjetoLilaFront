import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Sala } from 'src/app/model/sala';
import { MesaJogoService } from 'src/app/service/mesa-jogo.service';

@Component({
  selector: 'app-habilita-dado',
  templateUrl: './habilita-dado.component.html',
  styleUrls: ['./habilita-dado.component.scss'], 
})

export class HabilitaDadoComponent implements OnInit {
 
  @ViewChild('dice')
  public dado: ElementRef<Element> ={} as ElementRef;
  public sala: Sala = {} as Sala;
  public numero: number = 0;
  constructor(private mesaJogoService: MesaJogoService) {     
  }
  
  ngOnInit(): void {
    this.mesaJogoService
      .getemitSalaObservable()
      .subscribe((sala) => (this.sala = sala));      
  }
   
  rolarDado() {
    const node = this.dado.nativeElement;      
    this.numero = this.gerarNumeroAleatorio(1,6);
    //TODO: método para buscar do back
    // this.mesaJogoService.comprarCarta(this.sala).subscribe(sala => {this.sala = sala})
    // const number = this.sala.dado + '';    
    console.warn(this.numero)
    if (node instanceof HTMLElement) {
      this.trocarClasses(node);
      node.dataset['roll'] = this.numero.toString();
    }
  }  

  resetarDado(){
    const node = this.dado.nativeElement;    
    if (node instanceof HTMLElement) {
      this.resetarClasse(node);    
    }
    this.numero = 0;  
  }
  
  trocarClasses(die: HTMLElement) {
   die.classList.add('even-roll');    
  }  

  resetarClasse(die: HTMLElement){
    die.classList.remove('even-roll')
  }

  gerarNumeroAleatorio(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
