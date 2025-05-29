import { createReducer, on } from '@ngrx/store';
import * as PersonActions from './person.action';
import { Person } from './person.model';

export interface PersonState {
  persons: Person[];
}

export const initialState: PersonState = {
  persons: []
};

export const personReducer = createReducer(
  initialState,
  on(PersonActions.loadPersons, (state, { persons }) => ({ ...state, persons })),
  on(PersonActions.addPerson, (state, { person }) => ({
    ...state,
    persons: [...state.persons, person]
  })),
  on(PersonActions.updatePerson, (state, { person }) => ({
    ...state,
    persons: state.persons.map(p => (p.id === person.id ? person : p))
  })),
  on(PersonActions.deletePerson, (state, { id }) => ({
    ...state,
    persons: state.persons.filter(p => p.id !== id)
  }))
);
