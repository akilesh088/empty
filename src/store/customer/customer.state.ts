import { ActionReducerMap } from '@ngrx/store';
import { nameReducer, NameState } from './customer.reducer';

export interface AppState {
  name: NameState;
}

export const reducers: ActionReducerMap<AppState> = {
  name: nameReducer
};
