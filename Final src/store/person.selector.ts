import { createFeatureSelector, createSelector } from '@ngrx/store';
import { personFeatureKey, PersonState } from './person.reducer';

export const selectPersonState = createFeatureSelector<PersonState>(personFeatureKey);

export const selectAllPersons = createSelector(
  selectPersonState,
  (state) => state.persons
);
