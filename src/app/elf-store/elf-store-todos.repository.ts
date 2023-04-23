import { createStore } from '@ngneat/elf';
import { ToDo, initialState } from '../model';
import {
  addEntities,
  selectAllEntities,
  updateEntities,
  withEntities,
} from '@ngneat/elf-entities';
import { Injectable } from '@angular/core';

let todoIds = 3;

const store = createStore(
  { name: 'todos' },
  withEntities<ToDo>({ initialValue: initialState })
);

@Injectable({ providedIn: 'root' })
export class TodosRepository {
  todos$ = store.pipe(selectAllEntities());

  create(newTodo: ToDo) {
    store.update(addEntities({ ...newTodo, id: todoIds++ }));
  }

  toggle(todoToToggle: ToDo) {
    store.update(
      updateEntities(todoToToggle.id, (entity) => ({
        ...entity,
        isCompleted: !entity.isCompleted,
      }))
    );
  }
}
