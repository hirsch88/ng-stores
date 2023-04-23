import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  BalCheckboxModule,
  BalContentModule,
  BalStackModule,
  BalTextModule,
} from '@baloise/design-system-components-angular';
import { ToDo } from '../model';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [
    CommonModule,
    BalStackModule,
    BalContentModule,
    BalTextModule,
    BalCheckboxModule,
  ],
  template: `
    <bal-stack class="has-border-bottom-grey">
      <bal-content>
        <bal-text bold>{{ todo.title }}</bal-text>
      </bal-content>
      <bal-checkbox
        [checked]="todo.isCompleted"
        label-hidden
        (balChange)="onChange()"
      ></bal-checkbox>
    </bal-stack>
  `,
  styles: [
    `
      :host {
        display: block;
        width: 100%;
        flex: 1;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToDoComponent {
  @Input() todo: ToDo = new ToDo('');
  @Output() toggle = new EventEmitter<ToDo>();

  onChange() {
    this.toggle.emit(this.todo);
  }
}
