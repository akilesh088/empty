import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { addPerson } from '../store/person.action';
import { PersonListComponent } from './person/person.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, PersonListComponent],
  templateUrl:'./app.component.html'
})
export class AppComponent {
  
  name = '';

  constructor(private store: Store) {}

  addNewPerson() {
    if (!this.name.trim()) return;

    const newPerson = {
      id: Date.now(),
      name: this.name.trim()
    };

    this.store.dispatch(addPerson({ person: newPerson }));
    this.name = '';
  }
}
