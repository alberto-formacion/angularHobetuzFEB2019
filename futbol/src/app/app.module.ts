import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EquiposComponent } from './equipos/equipos.component';
import { BuscarEquipoPipe } from './pipes/buscar-equipo.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EquiposComponent,
    BuscarEquipoPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
