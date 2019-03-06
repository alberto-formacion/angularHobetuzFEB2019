import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  tareas: Array<Todo>;
  nuevoTodo: Todo;

  constructor() { }

  ngOnInit() {
    this.nuevoTodo = new Todo('', false, false);
    this.tareas = [
      new Todo('Pasear a Goku', false, false),
      new Todo('Sacar la basura', false, false)
    ];
  }

  addTodos() {
    this.tareas.push(this.nuevoTodo);
    this.nuevoTodo = new Todo('', false, false);
    console.log(this.tareas);
  }

  cambiarEstadoTarea(tarea: Todo): void {
    tarea.terminado = !tarea.terminado;
    console.log(this.tareas);
  }

  setStyles(tarea: Todo): any {
    return {
      'list-group-item-danger': tarea.importante,
      'list-group-item-success': tarea.terminado,
      'terminada': tarea.terminado
    };
  }

}
