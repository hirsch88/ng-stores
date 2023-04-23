import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ToDo } from '../model';
import { TodosRepository } from './elf-store-todos.repository';

@Component({
  selector: 'app-elf-store-json',
  standalone: true,
  imports: [CommonModule],
  template: ` <pre>{{ todosRepository.todos$ | async | json }}</pre> `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ElfStoreJsonComponent {
  constructor(public todosRepository: TodosRepository) {}
}
