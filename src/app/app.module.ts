import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfigAdminComponent } from './config-admin/config-admin.component';
import { MenuDoAdminComponent } from './menu-do-admin/menu-do-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfigAdminComponent,
    MenuDoAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
