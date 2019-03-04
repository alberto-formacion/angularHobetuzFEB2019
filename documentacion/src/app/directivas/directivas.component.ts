import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {

  valorParaMostrar: string;
  valorDePropiedad: boolean;
  valorBidireccional: string;

  constructor() { }

  ngOnInit() {
    this.valorParaMostrar = 'Este valor se declara en el Componente';
    this.valorDePropiedad = true;
    this.valorBidireccional = 'Valor inicial desde el componente';
  }

  accionEnComponente(e) {
    console.log(e);
    alert('accion desde el template al componente');
  }

}
