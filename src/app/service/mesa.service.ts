import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { WebSocketConnector } from 'src/websocket/websocket-connector';
import { environment } from 'src/environments/environment';
import { Sala } from 'src/app/model/sala';
import { Jogador } from '../model/jogador';
import { Observable } from 'rxjs';
import { SalaRequest } from '../model/salaRequest';

@Injectable({
  providedIn: 'root',
})
export class MesaService {
  private items: any[] = [];
  private webSocketConnector: WebSocketConnector;

  constructor(private http: HttpClient, private router: Router) {
    this.webSocketConnector = {} as WebSocketConnector;
  }

  /* Envia a informação do primeiro jogador para o back end.
   * Recebe as informações da sala criada.
   */
  iniciarHost(jogador: Jogador): Observable<Sala> {
    return this.http.post<Sala>(`${environment.API_URL}api/iniciar`, jogador);
  }

  /* O novo jogador se conecta através desta requisição
   *
   */
  conectarNovoJogador(salaRequest: SalaRequest): Observable<Sala> {
    return this.http.post<Sala>(
      `${environment.API_URL}/api/conectar`,
      salaRequest
    );
  }

  connectWebsocket(hash: string) {
    this.webSocketConnector = new WebSocketConnector(
      environment.API_URL,
      `/topic/${hash}`,
      //TODO: Linha 43 precisa ser modificada de acordo com a lógica das jogadas
      this.onMessage.bind(this)
    );
  }

  /* TODO: lógica das jogadas */
  onMessage(message: any): void {
    this.items.push(message.body);
  }

  /* TODO: lógica das jogadas */
  mostrarMensagem(): any {
    return this.items;
  }

  disconnect() {
    this.webSocketConnector.disconnect();
    this.items = [];
    this.router.navigate(['']);
  }

  findByHash(hash: string): Observable<Sala>{
    return this.http.get<Sala>(`${environment.API_URL}/sala/${hash}`);
  }
}
