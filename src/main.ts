import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideStore } from '@ngrx/store';
// import { counterReducer } from './counter/counter.reducer';


bootstrapApplication(AppComponent, {
  providers: [
    // provideStore({ counter: counterReducer }),
  ]
});