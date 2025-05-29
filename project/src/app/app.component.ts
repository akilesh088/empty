import { Component } from '@angular/core';
import { PersonListComponent } from './person/person.component';

@Component({
  selector: 'app-root',
  templateUrl : "./app.component.html",
  imports:[PersonListComponent]
})
export class AppComponent {}
