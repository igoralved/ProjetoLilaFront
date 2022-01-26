import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CartaDoJogo } from 'src/app/model/cartaDoJogo';
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
  public listaCartasMao: Array<CartaDoJogo> = [];
  constructor(private mesaJogoService: MesaJogoService) {}
  
  ngOnInit(): void {
    this.mesaJogoService
      .getemitSalaObservable()
      .subscribe((sala) => (this.sala = sala));
      
  }

  rolarDado() {
    const node = this.dado?.nativeElement;

    //TODO: método para buscar do back
    // this.mesaJogoService.comprarCarta(this.sala).subscribe(sala => {this.sala = sala})
    // const number = this.sala.dado + '';
    const number = this.gerarNumeroAleatorio(1,6).toString();
    console.warn(number)
    if (node instanceof HTMLElement) {
      this.trocarClasses(node);
      node.dataset['roll'] = this.number;
    }
  }  


  trocarClasses(die: HTMLElement) {
    die.classList.toggle('even-roll');
    die.remove
  }

  gerarNumeroAleatorio(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
