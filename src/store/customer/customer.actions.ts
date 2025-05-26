import { createAction, props } from '@ngrx/store';

export const setName = createAction('[Name] Set Name',
  props<{ name: string }>()
);