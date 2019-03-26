import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo/todo';

@Pipe({
  name: 'terminada'
})
export class TerminadaPipe implements PipeTransform {

  transform(todos: Array<Todo>, terminada: boolean): Array<Todo> {
    console.log('paso por el pipe TerminadaPipe');
    return todos.filter(todo => todo.terminado === terminada);
  }

}
