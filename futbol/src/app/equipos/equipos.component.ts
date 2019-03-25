import { Component, OnInit } from '@angular/core';
import { Equipo } from './equipo';
import es from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {

  equipos: Array<Equipo>;
  nombreEquipo: string;
  equipoSeleccionado: Equipo;
  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    registerLocaleData( es );
    this.equipos = [
      new Equipo('Athletic Club', 'Bilbao', 44171, 1898, 'https://cdn.icon-icons.com/icons2/1637/PNG/256/athletic-bilbao_109476.png'),
      new Equipo('Futbol Club Barcelona', 'Barcelona', 143459, 1899, 'https://cdn.icon-icons.com/icons2/1637/PNG/256/barcelona_109494.png'),
      new Equipo('Deportivo Alaves', 'Vitoria', 17512 , 1921, 'https://cdn.icon-icons.com/icons2/1637/PNG/256/alaves_109484.png'),
      new Equipo('Real Club Celta de Vigo', 'Vigo', 22104, 1923, 'https://cdn.icon-icons.com/icons2/1637/PNG/256/celta-de-vigo_109482.png')
    ];
    this.nombreEquipo = '';
    this.buildForm();
  }

  guardarEquipo() {
    this.equipos.push(this.formulario.value);
    this.formulario.reset();
  }

  mostrarEquipo(equipo: Equipo): void {
    this.equipoSeleccionado = equipo;
  }

  buildForm() {
    this.formulario = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      ciudad: '',
      socios: '',
      fundacion: '',
      escudo: ''
    });
  }

}
