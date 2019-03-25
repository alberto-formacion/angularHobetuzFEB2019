import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Equipo } from '../equipos/equipo';

@Component({
  selector: 'app-lista-equipos',
  templateUrl: './lista-equipos.component.html',
  styleUrls: ['./lista-equipos.component.css']
})
export class ListaEquiposComponent implements OnInit {

  @Input() equipos: Array<Equipo>;
  @Output() emitter: EventEmitter<Equipo> = new EventEmitter<Equipo>();

  constructor() { }

  ngOnInit() {
  }

  enviarEquipo(equipo: Equipo): void {
    this.emitter.emit(equipo);
  }

}
