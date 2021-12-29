import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './home-page/home-page.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { PrimeiroAcessoComponent } from './administrador/primeiro-acesso/primeiro-acesso.component';
import { AcessibilidadeComponent } from './acessibilidade/acessibilidade.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AdministradorComponent,
    PrimeiroAcessoComponent,
    AcessibilidadeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
