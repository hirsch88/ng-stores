import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ToDo } from '../model';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-ngrx-store-json',
  standalone: true,
  imports: [CommonModule],
  template: ` <pre>{{ todos$ | async | json }}</pre> `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgRxStoreJsonComponent {
  public todos$!: Observable<ToDo[]>;

  constructor(store: Store<{ todos: ToDo[] }>) {
    this.todos$ = store.select('todos');
  }
}
