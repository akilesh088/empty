import { bootstrapApplication } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { personReducer } from './store/person.reducer';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideStore({
      person: personReducer
    })
  ]
}).catch(err => console.error(err));
