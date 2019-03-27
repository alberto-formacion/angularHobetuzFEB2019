import { JugadorService } from './../services/jugador.service';
import { Component, OnInit } from '@angular/core';
import { Equipo } from '../equipos/equipo';
import es from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { EquipoService } from '../services/equipo.service';
import { Jugador } from './jugador';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent implements OnInit {

  equipos: Array<Equipo>;
  jugadores: Array<Jugador>;
  jugador: Jugador;

  constructor(private equipoService: EquipoService, private jugadorService: JugadorService) { }

  ngOnInit() {
    registerLocaleData( es );
    this.equipos = this.equipoService.getEquipos();

  }

  mostrarJugadores(equipo: Equipo) {
    this.jugador = null;
    this.jugadores = this.jugadorService.findJugadoresByEquipo(equipo);
  }

  mostrarJugador(jugador: Jugador) {
    this.jugador = jugador;
  }

}
