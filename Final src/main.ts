import { bootstrapApplication } from '@angular/platform-browser';
import { provideState, provideStore } from '@ngrx/store';
import { AppComponent } from './app/app.component';
import { personFeatureKey, personReducer } from './store/person.reducer';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent,appConfig)
