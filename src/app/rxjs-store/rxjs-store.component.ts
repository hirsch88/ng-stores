import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoCardComponent } from '../components/todo-card.component';
import { ToDoRxJSStore } from './rxjs-store-todos.service';
import { ToDo } from '../model';
import { RxJSStoreJsonComponent } from './rxjs-store-json.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs-store',
  standalone: true,
  imports: [CommonModule, ToDoCardComponent, RxJSStoreJsonComponent],
  template: `
    <app-todo-card
      title="RxJS Store"
      [todos]="todos$ | async"
      (create)="onTodoCreate($event)"
      (toggle)="onTodoToggle($event)"
    ></app-todo-card>
    <app-rxjs-store-json></app-rxjs-store-json>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RxJSStoreComponent implements OnInit {
  public todos$!: Observable<ToDo[]>;

  constructor(private store: ToDoRxJSStore) {}

  ngOnInit() {
    this.todos$ = this.store.state$;
  }

  onTodoCreate(todo: ToDo) {
    this.store.create(todo)
  }

  onTodoToggle(todo: ToDo) {
    this.store.toggle(todo)
  }

}
