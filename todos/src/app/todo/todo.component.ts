import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  tareas: Array<Todo>;

  constructor() { }

  ngOnInit() {
    this.tareas = [
      new Todo('Pasear a Goku', false, false),
      new Todo('Sacar la basura', false, false)
    ];
  }

}