import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CounterState } from './counter.reducer';



export const counterFeatureKey = 'counter';

export const selectCounterState = createFeatureSelector<CounterState>(counterFeatureKey);

export const selectCount = createSelector(
  selectCounterState,
  (state: CounterState) => state.count
);
