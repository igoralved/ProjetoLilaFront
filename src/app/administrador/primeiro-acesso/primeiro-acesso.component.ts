import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-primeiro-acesso',
  templateUrl: './primeiro-acesso.component.html',
  styleUrls: ['./primeiro-acesso.component.scss']
})
export class PrimeiroAcessoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  senha = new FormControl('', [Validators.required,
    Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,30}')
   ]);

   confirmaSenha = new FormControl('', [Validators.required,
    Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,30}')
   ]);


   validaSenha(){
    if (this.senha.hasError('required') || this.senha.hasError('pattern') 
    ||  this.senha.value === '' || this.senha.value !== this.confirmaSenha.value) {
      window.alert("deu errado")
    }else {
      window.alert("deu certo")
    }
    
   }

  mensagemDeErro() {
    if (this.senha.hasError('required')) {
      return 'Você precisa inserir uma senha';
    }

    return this.senha.hasError('pattern') ? 'Formato de Senha Inválida' : '';
  }


}
