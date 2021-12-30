import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Baralho } from '../model/baralho';

@Injectable({
  providedIn: 'root'
})
export class BaralhoService {

  URLBaralho : string = "https://development-lila.herokuapp.com/baralho";

  constructor(private http:HttpClient) { }

  cadastroBaralho(baralho: Baralho) {
    return this.http.post<Baralho>(this.URLBaralho, baralho)
  }

  listarBaralho(): Observable<Baralho[]> {
    return this.http.get<Baralho[]>(this.URLBaralho);
  }
}
