import { Component } from '@angular/core';
import { PersonComponent } from './person/person.component';

@Component({
  selector: 'app-root',
  templateUrl : "./app.component.html",
  imports:[PersonComponent]
})
export class AppComponent {}
