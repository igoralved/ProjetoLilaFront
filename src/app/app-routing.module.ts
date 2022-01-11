import { TelaSenhaComponent } from './administrador/tela-senha/tela-senha.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PrimeiroAcessoComponent } from './administrador/primeiro-acesso/primeiro-acesso.component';
import { MenuDoAdminComponent } from './administrador/menu-do-admin/menu-do-admin.component';
import { MesaJogoComponent } from './mesa/mesa-jogo/mesa-jogo.component';

const routes: Routes = [
  {
    path: 'primeiroacesso',
    component: PrimeiroAcessoComponent,
  },
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'login',
    component: TelaSenhaComponent,
  },
  {
    path: 'menu',
    component: MenuDoAdminComponent,
  },
  {
    path:'mesa',
    component: MesaJogoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
