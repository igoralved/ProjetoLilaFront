import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/service/modal.service';

@Component({
  selector: 'app-tela-senha',
  templateUrl: './tela-senha.component.html',
  styleUrls: ['./tela-senha.component.scss']
})
export class TelaSenhaComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

  
  abrirModal(id: string) {
    this.modalService.abrir(id);
  }

  fecharModal(id: string) {
    this.modalService.fechar(id);
  }

  validar(){
    /*INSERIR LÓGICA DE COMUNICAÇÃO COM O BACK PARA SOLICITAR A SENHAR*/
    let validar = true;
    if( validar == true){
      this.abrirModal('mensagemErro');
    }
  }
}
