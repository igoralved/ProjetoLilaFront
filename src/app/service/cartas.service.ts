import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carta } from '../model/carta';
import { CartaInicio } from '../model/cartaInicio';
import { CartaObjetivo } from '../model/cartaObjetivo';

@Injectable({
  providedIn: 'root',
})
export class CartaService {
  URLApi: string = 'https://development-lila.herokuapp.com/';
  URLCarta: string = this.URLApi + 'cartadojogo';
  URLCartaObjetivo: string = this.URLApi + 'CartaObjetivo';
  URLCartaInicio: string = this.URLApi + 'cartaInicio';

  constructor(private http: HttpClient) {}

  getListarCarta(): Observable<Carta[]> {
    return this.http.get<Carta[]>(this.URLCarta);
  }

  getListarCartaInicio(): Observable<CartaInicio[]> {
    return this.http.get<CartaInicio[]>(this.URLCartaInicio);
  }

  getListarCartaObjetivo(): Observable<CartaObjetivo[]> {
    return this.http.get<CartaObjetivo[]>(this.URLCartaObjetivo);
  }
}
