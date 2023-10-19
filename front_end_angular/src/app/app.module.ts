import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RistoranteListaComponent } from './ristorante-lista/ristorante-lista.component';
import { RistoranteInserisciComponent } from './ristorante-inserisci/ristorante-inserisci.component';
import { RistoranteDettaglioComponent } from './ristorante-dettaglio/ristorante-dettaglio.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    RistoranteListaComponent,
    RistoranteInserisciComponent,
    RistoranteDettaglioComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,   //Necessario per il Service
    FormsModule         //Necessario per il Form
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
