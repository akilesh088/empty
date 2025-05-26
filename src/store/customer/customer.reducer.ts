import { createReducer, on } from '@ngrx/store';
import { setName } from './customer.actions';

export interface NameState {
  name: string;
}

export const initialState: NameState = {
  name: ''
};

export const nameReducer = createReducer(
  initialState,
  on(setName, (state, { name }) => ({ ...state, name }))
);