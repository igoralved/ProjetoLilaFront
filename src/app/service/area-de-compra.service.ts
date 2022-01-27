import { Injectable, EventEmitter } from '@angular/core';

import { Carta } from '../model/carta';

@Injectable({
  providedIn: 'root'
})
export class AreaDeCompraService {
  public emitirCartaJogo: EventEmitter<Carta[]> = new EventEmitter<Carta[]>();
}
