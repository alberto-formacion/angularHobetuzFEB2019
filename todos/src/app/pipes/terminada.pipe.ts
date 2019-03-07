import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo/todo';

@Pipe({
  name: 'terminada',
  pure: false
})
export class TerminadaPipe implements PipeTransform {

  transform(todos: Array<Todo>, terminada: boolean): Array<Todo> {
    return todos.filter(todo => todo.terminado === terminada);
  }

}
