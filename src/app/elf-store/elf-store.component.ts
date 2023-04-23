import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoCardComponent } from '../components/todo-card.component';
import { ToDo } from '../model';
import { Observable } from 'rxjs';
import { ElfStoreJsonComponent } from './elf-store-json.component';
import { TodosRepository } from './elf-store-todos.repository';

@Component({
  selector: 'app-elf-store',
  standalone: true,
  imports: [CommonModule, ToDoCardComponent, ElfStoreJsonComponent],
  template: `
    <app-todo-card
      title="Elf Store"
      [todos]="todosRepository.todos$ | async"
      (create)="onTodoCreate($event)"
      (toggle)="onTodoToggle($event)"
    ></app-todo-card>
    <app-elf-store-json></app-elf-store-json>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ElfStoreComponent {
  constructor(public todosRepository: TodosRepository) {}

  onTodoCreate(todo: ToDo) {
    this.todosRepository.create(todo)
  }

  onTodoToggle(todo: ToDo) {
    this.todosRepository.toggle(todo)
  }
}
