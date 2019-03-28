import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { PriorizarPipe } from './pipes/priorizar.pipe';
import { TerminadaPipe } from './pipes/terminada.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    PriorizarPipe,
    TerminadaPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
