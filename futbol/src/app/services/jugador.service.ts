import { Jugador } from './../jugadores/jugador';
import { Injectable } from '@angular/core';
import { Equipo } from '../equipos/equipo';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {

  jugadores: Array<Jugador>;

  constructor() {
    this.jugadores = [new Jugador('Iker', 'Muniain', 26, 10, 'Delantero', new Equipo('Athletic Club')),
    new Jugador('Lionel', 'Messi', 31, 10, 'Delantero', new Equipo('Futbol Club Barcelona')),
    new Jugador('Manuel', 'Garcia', 30, 18, 'Centrocampista', new Equipo('Deportivo Alaves')),
    new Jugador('Iago', 'Aspas', 30, 10, 'Delantero', new Equipo('Real Club Celta de Vigo')),
    ];
  }

  getJugadores(): Array<Jugador>{
    return this.jugadores;
  }

  findJugadoresByEquipo(equipo: Equipo): Array<Jugador>{
    return this.jugadores.filter(jugador => jugador.equipo.nombre === equipo.nombre);
  }
}
