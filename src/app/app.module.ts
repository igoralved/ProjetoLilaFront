import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PrimeiroAcessoComponent } from './administrador/primeiro-acesso/primeiro-acesso.component';
import { AcessibilidadeComponent } from './acessibilidade/acessibilidade.component';
import { TelaSenhaComponent } from './administrador/tela-senha/tela-senha.component';
import { MenuDoAdminComponent } from './administrador/menu-do-admin/menu-do-admin.component';
import { MesaJogoComponent } from './mesa/mesa-jogo/mesa-jogo.component';
import { MaoJogadorComponent } from './mesa/mao-jogador/mao-jogador.component';
import { CriarMesaComponent } from './mesa/criar-mesa/criar-mesa.component';
import { MesaCriadaComponent } from './mesa/mesa-criada/mesa-criada.component';
import { ClipboardModule } from '@angular/cdk/clipboard';
import {
  InjectableRxStompConfig,
  RxStompService,
  rxStompServiceFactory,
} from '@stomp/ng2-stompjs';
import { myRxStompConfig } from './rx-stomp.config';
import { MesaJogoService } from './service/mesa-jogo.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PrimeiroAcessoComponent,
    AcessibilidadeComponent,
    TelaSenhaComponent,
    ModalComponent,
    MenuDoAdminComponent,
    MesaJogoComponent,
    MaoJogadorComponent,
    CriarMesaComponent,
    MesaCriadaComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatButtonModule,
    MatRippleModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    ClipboardModule
  ],
  providers: [
    {
      provide: InjectableRxStompConfig,
      useValue: myRxStompConfig,
    },
    {
      provide: RxStompService,
      useFactory: rxStompServiceFactory,
      deps: [InjectableRxStompConfig],
    },
    MesaJogoService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
