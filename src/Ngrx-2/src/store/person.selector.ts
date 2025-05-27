import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PersonState } from './person.reducer';

export const selectPersonState = createFeatureSelector<PersonState>('person');

export const selectPeople = createSelector(
  selectPersonState,
  (state) => state.people
);
