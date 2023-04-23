import { Injectable } from '@angular/core';
import { ToDo, initialState, toggleTodo } from '../model';
import { RxJSStore } from './rxjs-store';

@Injectable({
  providedIn: 'root',
})
export class ToDoRxJSStore extends RxJSStore<ToDo[]> {
  constructor() {
    super(initialState);
  }

  create(item: ToDo) {
    this.state.push(item);
    this.setState(this.state);
  }

  toggle(todoToToggle: ToDo): void {
    this.setState(toggleTodo(this.state, todoToToggle));
  }
}
