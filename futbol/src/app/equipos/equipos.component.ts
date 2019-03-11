import { Component, OnInit } from '@angular/core';
import { Equipo } from './equipo';
import es from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';

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
    registerLocaleData( es );
    this.nuevoEquipo = new Equipo('', '', 0, 0);
    this.equipos = [
      new Equipo('Athletic Club', 'Bilbao', 44171, 1898),
      new Equipo('Futbol Club Barcelona', 'Barcelona', 143459, 1899),
      new Equipo('Deportivo Alaves', 'Vitoria', 17512 , 1921),
      new Equipo('Real Club Celta de Vigo', 'Vigo', 22104, 1923)
    ];
    this.nombreEquipo = '';
  }

  guardarEquipo() {
    this.equipos.push(this.nuevoEquipo);
    this.nuevoEquipo = new Equipo('', '', 0, 0);
  }

}
