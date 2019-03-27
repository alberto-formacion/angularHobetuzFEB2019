import { Equipo } from '../equipos/equipo';

export class Jugador {
    constructor(
        public nombre: string,
        public apellido: string,
        public edad: number,
        public dorsal: number,
        public demarcacion: string,
        public equipo: Equipo
    ) {}
}
