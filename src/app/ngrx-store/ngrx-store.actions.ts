import { createAction, props } from '@ngrx/store';
import { ToDo } from '../model';

export const toggle = createAction('[ToDo] Toggle', props<{ todo: ToDo }>());
export const create = createAction('[ToDo] Create', props<{ todo: ToDo }>());
