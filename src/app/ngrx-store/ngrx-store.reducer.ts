import { createReducer, on } from '@ngrx/store';
import { create, toggle } from './ngrx-store.actions';
import { ToDo, initialState, toggleTodo } from '../model';

export const myInitialState = [...initialState];

export const todosReducer = createReducer(
  myInitialState,
  on(create, (state: ToDo[], { todo }) => [...state, todo]),
  on(toggle, (state: ToDo[], { todo }) => toggleTodo(state, todo))
);
