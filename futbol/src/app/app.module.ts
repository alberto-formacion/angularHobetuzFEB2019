import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EquiposComponent } from './equipos/equipos.component';
import { BuscarEquipoPipe } from './pipes/buscar-equipo.pipe';
import { JugadoresComponent } from './jugadores/jugadores.component';
import { ListaEquiposComponent } from './lista-equipos/lista-equipos.component';

@NgModule({
  declarations: [
    AppComponent,
    EquiposComponent,
    BuscarEquipoPipe,
    JugadoresComponent,
    ListaEquiposComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
