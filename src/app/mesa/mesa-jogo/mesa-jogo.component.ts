import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RxStompService } from '@stomp/ng2-stompjs';
import { Message } from '@stomp/stompjs';
import { Subscription } from 'rxjs';
import { Sala } from 'src/app/model/sala';
import { MesaJogoService } from 'src/app/service/mesa-jogo.service';
import { MesaService } from 'src/app/service/mesa.service';

@Component({
  selector: 'app-mesa-jogo',
  templateUrl: './mesa-jogo.component.html',
  styleUrls: ['./mesa-jogo.component.scss'],
})
export class MesaJogoComponent implements OnInit {
  public receivedMessages: string[] = [];
  sala: Sala;
  private hash = '';
  private topicSubscription: Subscription = Subscription.EMPTY;

  constructor(
    private rxStompService: RxStompService,
    private mesaService: MesaService,
    private mesaJogoService: MesaJogoService,
    private route: ActivatedRoute
  ) {
    this.sala = {} as Sala;
  }

  ngOnInit(): void {
    //Salva o hash recebido por parâmetro
    this.hash = String(this.route.snapshot.paramMap.get('hash'));

    //busca a sala no mesaJogo Service para receber a sala mais atualizada
    this.mesaJogoService.getemitSalaObservable().subscribe((sala) => {
      this.sala = sala;
    });
    //faz o subscribe no endereço do websocket
    this.topicSubscription = this.rxStompService
      .watch(`/gameplay/game-update/${this.hash}`)
      .subscribe((msg: Message) => {
        console.warn(msg.body);
        this.sala = JSON.parse(msg.body);
        this.receivedMessages.push(msg.body);
      });
  }

  ngOnDestroy(): void {
    this.topicSubscription.unsubscribe();
  }

  onPlayCard() {
    //TODO: Logica do Jogo
    const message = {
      player: 'Player Number 1',
    };
    this.rxStompService.publish({
      destination: '/game-app/play-card',
      body: JSON.stringify(message),
    });
  }
}
