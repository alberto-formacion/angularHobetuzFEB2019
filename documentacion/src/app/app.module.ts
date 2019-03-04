import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InstalacionComponent } from './instalacion/instalacion.component';
import { TypescriptComponent } from './typescript/typescript.component';
import { ComponentesComponent } from './componentes/componentes.component';
import { BindingComponent } from './binding/binding.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { RoutingComponent } from './routing/routing.component';
import { PipesComponent } from './pipes/pipes.component';
import { ServicesComponent } from './services/services.component';
import { FormulariosComponent } from './formularios/formularios.component';
import { InicioComponent } from './inicio/inicio.component';
import { EstructuraComponent } from './estructura/estructura.component';

@NgModule({
  declarations: [
    AppComponent,
    InstalacionComponent,
    TypescriptComponent,
    ComponentesComponent,
    BindingComponent,
    DirectivasComponent,
    RoutingComponent,
    PipesComponent,
    ServicesComponent,
    FormulariosComponent,
    InicioComponent,
    EstructuraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
