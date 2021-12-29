import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ModalService } from 'src/app/service/modal.service';

@Component({
  selector: 'app-primeiro-acesso',
  templateUrl: './primeiro-acesso.component.html',
  styleUrls: ['./primeiro-acesso.component.scss'],
})
export class PrimeiroAcessoComponent implements OnInit {
  constructor(private modalService: ModalService) {}

  ngOnInit(): void {}

  senha = new FormControl('', [
    Validators.required,
    Validators.pattern(
      '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{7,30}'
    ),
  ]);

  confirmaSenha = new FormControl('', [
    Validators.required,
    Validators.pattern(
      '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{7,30}'
    ),
  ]);

  enviar(id:string) {
    if (
      this.senha.hasError('required') ||
      this.senha.hasError('pattern') ||
      this.senha.value === '' ||
      this.senha.value !== this.confirmaSenha.value
    ) {
      /*INSERIR MENSAGEM DE ERRO (MODAL)*/
      this.modalService.abrir(id)
    } else {
      /*INSERIR CONEXÃO HTTP POST PARA ENVIAR A SENHA*/
      window.alert('deu certo');
    }
  }

  mensagemDeErro() {
    if (this.senha.hasError('required')) {
      return 'Você precisa inserir uma senha';
    }
    return this.senha.hasError('pattern') ? 'Formato de Senha Inválida' : '';
  }

  fecharModal(id: string) {
    this.modalService.fechar(id);
  }
}
