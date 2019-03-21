import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Objeto } from '../models/Objeto';

@Component({
  selector: 'app-componente-b',
  templateUrl: './componente-b.component.html',
  styleUrls: ['./componente-b.component.css']
})
export class ComponenteBComponent implements OnInit {

  @Output() public emitter: EventEmitter<Objeto> = new EventEmitter<Objeto>();
  objeto: Objeto;

  constructor() { }

  ngOnInit() {
    this.objeto = new Objeto('Adios', 'Mundo');
    this.enviarObjeto();
  }

  enviarObjeto(): void {
    this.emitter.emit(this.objeto);
  }

}
