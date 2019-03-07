import { Component, OnInit } from '@angular/core';
import { Equipo } from './equipo';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {

  equipos: Array<Equipo>;
  nuevoEquipo: Equipo;
  nombreEquipo: string;

  constructor() { }

  ngOnInit() {
    this.nuevoEquipo = new Equipo('', '', 0, 0);
    this.equipos = [];
    this.nombreEquipo = '';
  }

  guardarEquipo() {
    this.equipos.push(this.nuevoEquipo);
    this.nuevoEquipo = new Equipo('', '', 0, 0);
  }

}
