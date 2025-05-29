import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Person } from '../../store/person.model';
import * as PersonActions from '../../store/person.action';
import { selectAllPersons } from '../../store/person.selector';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-person-list',
  standalone: true,
  templateUrl: "./person.component.html",
  imports: [CommonModule, ReactiveFormsModule]
})
export class PersonListComponent {
  persons$: Observable<Person[]>;
  personForm: FormGroup;
  editingPersonId: string | null = null;

  constructor(private store: Store, private fb: FormBuilder) {
    this.persons$ = this.store.pipe(select(selectAllPersons));
    this.personForm = this.fb.group({
      name: ['', Validators.required],
    });
  }

  

  addPerson() {
    if (this.personForm.valid) {
      const person: Person = {
        id: Date.now().toString(),
        name: this.personForm.value.name.trim(),
      };
      this.store.dispatch(PersonActions.addPerson({ person }));
      this.personForm.reset();
    }
  }

  editPerson(person: Person) {
    this.editingPersonId = person.id;
    this.personForm.setValue({ name: person.name });
  }

  updatePerson() {
    if (this.personForm.valid && this.editingPersonId) {
      const updatedPerson: Person = {
        id: this.editingPersonId,
        name: this.personForm.value.name.trim(),
      };
      this.store.dispatch(PersonActions.updatePerson({ person: updatedPerson }));
      this.cancelEdit();
    }
  }

  deletePerson(id: string) {
    this.store.dispatch(PersonActions.deletePerson({ id }));
  }

  cancelEdit() {
    this.editingPersonId = null;
    this.personForm.reset();
  }
}
