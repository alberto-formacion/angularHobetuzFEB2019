import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  tareas: Array<Todo> = [];
  nuevoTodo: Todo;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.nuevoTodo = new Todo(0, '', false, false);

    this.todoService.getTodos().subscribe(todos => {
      console.log(todos);
      this.tareas = todos;
      console.log(this.tareas);
    });
  }

  addTodos() {
    this.todoService.addTodo(this.nuevoTodo).subscribe(todos => this.tareas = todos);
    this.nuevoTodo = new Todo(0, '', false, false);
  }

  cambiarEstadoTarea(tarea: Todo): void {
    this.todoService.updateTodo(tarea).subscribe(todos => this.tareas = todos);
    console.log(this.tareas);
  }

  setStyles(tarea: Todo): any {
    return {
      'list-group-item-danger': tarea.importante,
      'list-group-item-success': tarea.terminada,
      'terminada': tarea.terminada
    };
  }

}
