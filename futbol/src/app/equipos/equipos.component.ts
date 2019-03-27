import { EquipoService } from './../services/equipo.service';
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

  constructor(private formBuilder: FormBuilder, private equipoService: EquipoService) { }

  ngOnInit() {
    registerLocaleData( es );
    this.equipos = this.equipoService.getEquipos();
    this.nombreEquipo = '';
    this.buildForm();
  }

  guardarEquipo() {
    this.equipos = this.equipoService.addEquipo(this.formulario.value);
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
