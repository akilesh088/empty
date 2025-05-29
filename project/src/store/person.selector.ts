import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PersonState } from './person.reducer';

export const selectPersonState = createFeatureSelector<PersonState>('persons');

export const selectAllPersons = createSelector(
  selectPersonState,
  (state) => state.persons
);
