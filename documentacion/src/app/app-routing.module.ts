import { EstructuraComponent } from './estructura/estructura.component';
import { FormulariosComponent } from './formularios/formularios.component';
import { ComponentesComponent } from './componentes/componentes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstalacionComponent } from './instalacion/instalacion.component';
import { InicioComponent } from './inicio/inicio.component';
import { TypescriptComponent } from './typescript/typescript.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { RoutingComponent } from './routing/routing.component';
import { ServicesComponent } from './services/services.component';
import { PipesComponent } from './pipes/pipes.component';

const routes: Routes = [
  {path: 'instalacion', component: InstalacionComponent},
  {path: 'typescript', component: TypescriptComponent},
  {path: 'estructura', component: EstructuraComponent},
  {path: 'componentes', component: ComponentesComponent},
  {path: 'directivas', component: DirectivasComponent},
  {path: 'routing', component: RoutingComponent},
  {path: 'servicios', component: ServicesComponent},
  {path: 'pipes', component: PipesComponent},
  {path: 'formularios', component: FormulariosComponent},
  {path: 'inicio', component: InicioComponent},
  {path: '**', component: InstalacionComponent},
  {path: '', redirectTo: '/instalacion', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
