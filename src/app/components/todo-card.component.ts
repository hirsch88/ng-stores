import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  BalButtonModule,
  BalCardModule,
  BalHeadingModule,
  BalInputModule,
  BalStackModule,
} from '@baloise/design-system-components-angular';
import { ToDoComponent } from './todo.component';
import { ToDo } from '../model';
import { Events } from '@baloise/design-system-components';

@Component({
  selector: 'app-todo-card',
  standalone: true,
  imports: [
    CommonModule,
    BalCardModule,
    BalStackModule,
    BalHeadingModule,
    BalInputModule,
    BalButtonModule,
    ToDoComponent,
  ],
  template: `
    <bal-card>
      <bal-card-content>
        <bal-stack direction="column">
          <bal-heading level="h2">{{ title }}</bal-heading>
          <bal-stack>
            <bal-input [value]="inputValue" (balInput)="onInputChange($event)" class="is-flex-grow-1 is-flex-shrink-1" placeholder="Enter title"></bal-input>
            <bal-button [disabled]="!inputValue" (click)="onCreateButtonClick()">create</bal-button>
          </bal-stack>
          <bal-stack space="normal" direction="column">
            <bal-heading level="h4">ToDo's</bal-heading>
            <app-todo
              *ngFor="let todo of todos; trackBy: trackToDo"
              [todo]="todo"
              (toggle)="onToggle($event)"
            ></app-todo>
          </bal-stack>
        </bal-stack>
      </bal-card-content>
    </bal-card>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToDoCardComponent {
  @Input() title = '';
  @Input() todos: ToDo[] | null = [];
  @Output() toggle = new EventEmitter<ToDo>();
  @Output() create = new EventEmitter<ToDo>();

  inputValue = ''

  trackToDo(index: number, todo: ToDo) {
    return todo ? todo.title : undefined;
  }

  onToggle(todo: ToDo) {
    this.toggle.emit(todo);
  }

  onInputChange(event: Events.BalInputInput) {
    this.inputValue = event.detail || ''
  }

  onCreateButtonClick() {
    this.create.emit(new ToDo(this.inputValue, false))
    this.inputValue = ''
  }
}
