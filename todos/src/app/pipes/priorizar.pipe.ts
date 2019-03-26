import { Todo } from './../todo/todo';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priorizar'
})
export class PriorizarPipe implements PipeTransform {

  transform(todos: Array<Todo>): Array<Todo> {
    console.log('paso por el pipe PriorizarPipe');
    return todos.sort((a, b) => (b.importante && !a.importante) ? 1 : -1);
  }

}
