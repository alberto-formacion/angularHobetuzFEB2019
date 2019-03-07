import { Pipe, PipeTransform } from '@angular/core';
import { Equipo } from '../equipos/equipo';

@Pipe({
  name: 'buscarEquipo'
})
export class BuscarEquipoPipe implements PipeTransform {

  transform(equipos: Array<Equipo>, nombreEquipo: string): Array<Equipo> {
    if (nombreEquipo !== undefined && nombreEquipo.length > 0) {
      return equipos.filter(equipo => equipo.nombre.toLowerCase().indexOf(nombreEquipo.toLowerCase()) !== -1);
    } else {
      return equipos;
    }
  }

}
