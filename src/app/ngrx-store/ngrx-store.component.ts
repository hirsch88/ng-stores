import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoCardComponent } from '../components/todo-card.component';
import { ToDo } from '../model';
import { Observable } from 'rxjs';
import { NgRxStoreJsonComponent } from './ngrx-store-json.component';
import { Store } from '@ngrx/store';
import { create, toggle } from './ngrx-store.actions';

@Component({
  selector: 'app-ngrx-store',
  standalone: true,
  imports: [CommonModule, ToDoCardComponent, NgRxStoreJsonComponent],
  template: `
    <app-todo-card
      title="NgRx Store"
      [todos]="todos$ | async"
      (create)="onTodoCreate($event)"
      (toggle)="onTodoToggle($event)"
    ></app-todo-card>
    <app-ngrx-store-json></app-ngrx-store-json>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgRxStoreComponent {
  public todos$!: Observable<ToDo[]>;

  constructor(private store: Store<{ todos: ToDo[] }>) {
    this.todos$ = store.select('todos');
  }

  onTodoCreate(todo: ToDo) {
    this.store.dispatch(create({ todo }));
  }

  onTodoToggle(todo: ToDo) {
    this.store.dispatch(toggle({ todo }));
  }
}
