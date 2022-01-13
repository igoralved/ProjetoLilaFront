import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Sala } from '../model/sala';
import { MesaService } from './mesa.service';
@Injectable({
  providedIn: 'root',
})
export class MesaJogoService {
  private emit$ = new BehaviorSubject<Sala >({} as Sala);

  constructor(private mesaService: MesaService) {
    
  }

  getEmitObservable(): Observable<Sala> {
    return this.emit$.asObservable();
  }

  getEmitSubject() {
    return this.emit$;
  }


}
