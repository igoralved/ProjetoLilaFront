import { Component, OnInit } from '@angular/core';
import { ModalService } from './service/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ProjetoLilaFront';
  constructor(private modalService: ModalService) { }

  ngOnInit(): void {    
  }

  abrirModal(id: string) {
    this.modalService.abrir(id);
  }

  fecharModal(id: string) {
    this.modalService.fechar(id);
  }

  validar(){
    let validar = true;
    if( validar == true){
      this.abrirModal('mensagemErro');
    }
  }
}
