import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { JuegoComponent } from './juego/juego.component';
import { FinalpartidaComponent } from './finalpartida/finalpartida.component';
import { ListaComponent } from './lista/lista.component';
import { ScrapComponent } from './scrap/scrap.component';
import { DbComponent } from './db/db.component';
import { JuegodesarrolladorComponent } from './juegodesarrollador/juegodesarrollador.component';
import { JuegogeneroComponent } from './juegogenero/juegogenero.component';
import { Page404Component } from './page404/page404.component';
import { JuegoportadaComponent } from './juegoportada/juegoportada.component';

export const routes: Routes = [
  {path:'', redirectTo:'inicio', pathMatch:"full"},
  {path:"inicio", component:InicioComponent},
  {path:"juego", component:JuegoComponent},
  {path: 'finalpartida/:puntos', component: FinalpartidaComponent},
  {path:"lista", component:ListaComponent},
  {path:"scrap", component:ScrapComponent},
  {path:"db", component:DbComponent},
  {path:"juegodesarrollador", component:JuegodesarrolladorComponent},
  {path:"juegogenero", component:JuegogeneroComponent},
  {path:"page404", component:Page404Component},
  {path:"juegoportada", component:JuegoportadaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
