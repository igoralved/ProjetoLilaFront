import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PrimeiroAcessoComponent } from './administrador/primeiro-acesso/primeiro-acesso.component';

const routes: Routes = [
  {
    path: 'primeiroacesso',
    component: PrimeiroAcessoComponent
  },{
    path: '',
    component: HomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
