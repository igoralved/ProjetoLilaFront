import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sala } from 'src/app/model/sala';
import { MesaService } from 'src/app/service/mesa.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-mesa-criada',
  templateUrl: './mesa-criada.component.html',
  styleUrls: ['./mesa-criada.component.scss'],
})
export class MesaCriadaComponent implements OnInit {
  sala: Sala;
  hash: string;
  link: string;
  //link vai ser: url do site + rota do componente da US030 + hash
  constructor(private route: ActivatedRoute, private mesaService: MesaService) {
    this.sala = {} as Sala;
    this.hash = '';
    this.link = '';
  }

  ngOnInit(): void {
    this.hash = String(this.route.snapshot.paramMap.get('hash'));
    this.link = `${environment.CLIENT_URL}entrarmesa/${this.hash}`;
    this.mesaService
      .findByHash(this.hash)
      .subscribe((sala) => (this.sala = sala));
  }

  conectarWebsocket(){
   this.mesaService.connectWebsocket(this.hash);
   //TODO: conectar na tela da mesa (US029)
  }
}
