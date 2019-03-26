import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  tareas: Array<Todo>;
  nuevoTodo: Todo;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.nuevoTodo = new Todo('', false, false);
    this.tareas = this.todoService.getTodos();
  }

  addTodos() {
    this.tareas = this.todoService.addTodo(this.nuevoTodo);
    this.nuevoTodo = new Todo('', false, false);
  }

  cambiarEstadoTarea(tarea: Todo): void {
    this.tareas = this.todoService.updateTodo(tarea);
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
