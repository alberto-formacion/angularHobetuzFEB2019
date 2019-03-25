import { JugadoresComponent } from './jugadores/jugadores.component';
import { EquiposComponent } from './equipos/equipos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'equipos', component: EquiposComponent},
  {path: 'jugadores', component: JugadoresComponent},
  {path: '', redirectTo: '/equipos', pathMatch: 'full'},
  {path: '**', component: EquiposComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
