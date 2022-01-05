import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { WebSocketConnector } from 'src/websocket/websocket-connector';
import { environment } from 'src/environments/environment';
import { Sala } from 'src/app/model/sala';

@Injectable({
  providedIn: 'root',
})
export class MesaService {
  private items: any[] = [];
  private webSocketConnector: WebSocketConnector;

  constructor(private http: HttpClient, private router: Router) {
    this.webSocketConnector = {} as WebSocketConnector;
  }

  connect(id: string) {
    this.webSocketConnector = new WebSocketConnector(
      //TODO: pegar a url correta com a dupla do back
      environment.API_URL,
      '/statusProcessor' + id,
      this.onMessage.bind(this)
    );
    
  }
  //TODO: verificar com a dupla do back a url correta
  start(sala: Sala) {
    this.http
      .put<Sala>(`${environment.API_URL}/api`, sala)
      .subscribe((response) => console.log(response));
  }

  onMessage(message: any): void {
    this.items.push(message.body);
  }

  mostrarMensagem(): any {
    return this.items;
  }

  disconnect() {
    this.webSocketConnector.disconnect();
    this.items = [];
    this.router.navigate(['']);
  }
}
