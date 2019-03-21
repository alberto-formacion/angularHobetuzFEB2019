import { Component } from '@angular/core';
import { Objeto } from './models/Objeto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  objeto = new Objeto('Hola', 'Mundo');
  title = 'inputOutput';

  capturarObjeto(obj: Objeto): void {
    console.log(obj);
    this.objeto = obj;
  }
}
