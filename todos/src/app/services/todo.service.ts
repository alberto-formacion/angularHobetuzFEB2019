import { Injectable } from '@angular/core';
import { Todo } from '../todo/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  tareas: Array<Todo>;

  constructor() {
    this.tareas = [
      new Todo('Pasear a Goku', false, false),
      new Todo('Sacar la basura', false, false)
    ];
  }

  getTodos(): Array<Todo> {
    return this.tareas;
  }

  addTodo(tarea: Todo): Array<Todo> {
    this.tareas = [...this.tareas, tarea];
    return this.tareas;
  }

  updateTodo(tarea: Todo): Array<Todo> {
    const todoIndex = this.tareas.indexOf(tarea);
    tarea.terminado = !tarea.terminado;

    this.tareas = [ ...this.tareas.slice(0, todoIndex),
      tarea,
      ...this.tareas.slice(todoIndex + 1)
    ];

    return this.tareas;
  }
}
