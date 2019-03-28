import { Injectable } from '@angular/core';
import { Todo } from '../todo/todo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  url = 'http://localhost:8080/todos';

  constructor(private httpClient: HttpClient) {}

  getTodos(): Observable<Array<Todo>> {
    return this.httpClient.get<Array<Todo>>(this.url);
  }

  addTodo(tarea: Todo): Observable<Array<Todo>> {
    return this.httpClient.post<Array<Todo>>(this.url, tarea);
  }

  updateTodo(tarea: Todo): Observable<Array<Todo>> {
    return this.httpClient.put<Array<Todo>>(this.url, tarea);
  }
}
