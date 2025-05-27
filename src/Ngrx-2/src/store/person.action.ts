import { createAction, props } from '@ngrx/store';
import { Person } from './person.model';

export const addPerson = createAction(
  '[Person] Add Person',
  props<{ person: Person }>()
);

export const deletePerson = createAction(
  '[Person] Delete Person',
  props<{ id: number }>()
);

export const updatePerson = createAction(
  '[Person] Update Person',
  props<{ person: Person }>()
);
