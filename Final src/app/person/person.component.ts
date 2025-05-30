import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Person } from '../../store/person.model';
import * as PersonActions from '../../store/person.action';
import { selectAllPersons } from '../../store/person.selector';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule,FormBuilder,FormGroup,Validators,} from '@angular/forms';
import { PersonStorageService } from '../person.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-person-list',
  templateUrl: './person.component.html',
  styleUrl: './person.component.css',
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  providers: [PersonComponent],
})
export class PersonComponent implements OnInit {
  persons$: Observable<Person[]>;
  personForm: FormGroup;
  editingPersonId: string | null = null;

  constructor(
    private store: Store,
    private fb: FormBuilder,
    private service: PersonStorageService
  ) {
    this.persons$ = this.store.pipe(select(selectAllPersons));
    this.personForm = this.fb.group({
      name: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.service
      .getAllPersons()
      .subscribe((res) =>
        this.store.dispatch(PersonActions.loadPersons({ persons: res }))
      );
  }

  addPerson() {
    if (this.personForm.valid) {
      const person: Person = {
        id: Date.now().toString(),
        name: this.personForm.value.name.trim(),
      };
      this.service.addPerson(person).subscribe(res=>console.log(res))
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
      this.service.updatePerson(updatedPerson).subscribe(res=>console.log(res))
      this.store.dispatch(
        PersonActions.updatePerson({ person: updatedPerson })
      );
      this.cancelEdit();
    }
  }

  deletePerson(id: string) {
    this.service.deletePerson(id).subscribe(res=>console.log(res))
    this.store.dispatch(PersonActions.deletePerson({ id }));
  }

  cancelEdit() {
    this.editingPersonId = null;
    this.personForm.reset();
  }
}
