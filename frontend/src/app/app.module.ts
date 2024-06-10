import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InicioComponent } from './inicio/inicio.component';
import { JuegoComponent } from './juego/juego.component';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { FinalpartidaComponent } from './finalpartida/finalpartida.component';
import { ListaComponent } from './lista/lista.component';
import { ScrapComponent } from './scrap/scrap.component';
import { DbComponent } from './db/db.component';
import { Page404Component } from './page404/page404.component';
import { JuegogeneroComponent } from './juegogenero/juegogenero.component';
import { JuegodesarrolladorComponent } from './juegodesarrollador/juegodesarrollador.component';
import { JuegoportadaComponent } from './juegoportada/juegoportada.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicioComponent,
    JuegoComponent,
    FinalpartidaComponent,
    ListaComponent,
    ScrapComponent,
    DbComponent,
    Page404Component,
    JuegogeneroComponent,
    JuegodesarrolladorComponent,
    JuegoportadaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideRouter(routes), provideAnimations(), provideHttpClient(), provideClientHydration(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
