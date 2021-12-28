import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimeiroAcessoComponent } from './administrador/primeiro-acesso/primeiro-acesso.component';

const routes: Routes = [
  {
    path: 'primeiroacesso',
    component: PrimeiroAcessoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
