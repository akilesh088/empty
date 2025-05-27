import { createReducer, on } from '@ngrx/store';
import { addPerson,deletePerson,updatePerson } from './person.action';
import { Person } from './person.model';

export interface PersonState {
  people: Person[];
}

export const initialState: PersonState = {
  people: [],
};

export const personReducer = createReducer(
     
  initialState,
  on(addPerson, (state, { person }) => 
    ({
    ...state,people: [...state.people, person]})),


  on(deletePerson, (state, { id }) => ({
    ...state,people: state.people.filter(p => 
        p.id !== id)})),


  on(updatePerson, (state, { person }) => ({
   
    ...state,people: state.people.map(p => 
        
        (p.id === person.id ? person : p))}))
);
