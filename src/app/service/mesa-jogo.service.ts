import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Sala } from '../model/sala';
import { MesaService } from './mesa.service';
@Injectable({
  providedIn: 'root',
})
export class MesaJogoService {
  private emit$ = new BehaviorSubject<Sala | null >(null);

  constructor(private mesaService: MesaService) {
    
  }

  getEmitObservable(): Observable<Sala | null> {
    return this.emit$.asObservable();
  }

  getEmitSubject() {
    return this.emit$;
  }


}
