import { bootstrapApplication } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { AppComponent } from './app/app.component';
import { personReducer } from './store/person.reducer';

bootstrapApplication(AppComponent, {
  providers: [
    provideStore({ persons: personReducer }),
  ]
});
