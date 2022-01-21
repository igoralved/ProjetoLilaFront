import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Sala } from '../model/sala';



@Injectable({
  providedIn: 'root'
})
export class IniciaPartidaService {
 
  constructor(private http:HttpClient) { }

  getQuantidadeJogadores(hash : string){
    return this.http.get(
      `${environment.API_URL}numeroJogadores`+
      hash
    );
    
  }

  iniciaPartida(sala: Sala): Observable<Sala> {
    return this.http.post<Sala>(
      `${environment.API_URL}jogada/iniciarPartida`,
      sala
    );
  }
  

  
}
