import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Person } from '../../store/person.model';
import { selectPeople } from '../../store/person.selector';
import { deletePerson,updatePerson } from '../../store/person.action';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-person-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl:'./person.component.html'
})
export class PersonListComponent {
  people$: Observable<Person[]>;
  editableNames: { [id: number]: string } = {};

  constructor(private store: Store) {
    this.people$ = this.store.pipe(select(selectPeople));
    this.people$.subscribe(people => {
      people.forEach(p => {
        if (!(p.id in this.editableNames)) {
          this.editableNames[p.id] = p.name;
        }
      });
    });
  }

  update(person: Person) {
    const updatedName = this.editableNames[person.id]?.trim();
    if (!updatedName) return;
    if (updatedName === person.name) return;
    this.store.dispatch(updatePerson({ person: { ...person, name: updatedName } }));
  }

  delete(id: number) {
    this.store.dispatch(deletePerson({ id }));
  }
}
