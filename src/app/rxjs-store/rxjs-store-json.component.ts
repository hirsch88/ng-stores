import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ToDo } from '../model';
import { ToDoRxJSStore } from './rxjs-store-todos.service';

@Component({
  selector: 'app-rxjs-store-json',
  standalone: true,
  imports: [CommonModule],
  template: ` <pre>{{ todos$ | async | json }}</pre> `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RxJSStoreJsonComponent implements OnInit {
  public todos$!: Observable<ToDo[]>;

  constructor(private store: ToDoRxJSStore) {}

  ngOnInit() {
    this.todos$ = this.store.state$;
  }
}
