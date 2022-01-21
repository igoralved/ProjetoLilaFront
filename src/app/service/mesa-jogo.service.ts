import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Jogador } from '../model/jogador';
import { Sala } from '../model/sala';
import { MesaService } from './mesa.service';
@Injectable({
  providedIn: 'root',
})
export class MesaJogoService {
  private emitSala$ = new BehaviorSubject<Sala>({} as Sala);
  private emitJogador$ = new BehaviorSubject<Jogador>({} as Jogador);

  constructor(private mesaService: MesaService, private http: HttpClient) {}

  getemitSalaObservable(): Observable<Sala> {
    return this.emitSala$.asObservable();
  }

  getemitSalaSubject() {
    return this.emitSala$;
  }

  getemitJogadorObservable(): Observable<Jogador> {
    return this.emitJogador$.asObservable();
  }

  getemitJogadorSubject() {
    return this.emitJogador$;
  }

  //TODO: metodo para chamar do back
  getDadoJogada(): Observable<Sala>{
    return this.http.get<Sala>(environment.API_URL + '/')
  }
}
