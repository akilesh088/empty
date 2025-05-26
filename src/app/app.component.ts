import { Component } from '@angular/core';
import { provideStore, Store } from '@ngrx/store';

// import { counterReducer } from '../counter/counter.reducer'
// import * as CounterActions from '../counter/counter.actions';
// import * as CounterSelectors from '../counter/counter.selectors';

import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

import { CustomerComponent } from './customer/customer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[CommonModule,CustomerComponent],
  templateUrl: './app.component.html',  
})

export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  // title(title: any) {
  //   throw new Error('Method not implemented.');
  // }
  // count$: Observable<number>;

  // constructor(private store: Store) {

  //   this.count$ = this.store.select(CounterSelectors.select);
  // }

  // increment() {
  //   this.store.dispatch(CounterActions.increment());
  // }

  // decrement() {
  //   this.store.dispatch(CounterActions.decrement());
  // }

  // reset() {
  //   this.store.dispatch(CounterActions.reset());
  // }
}
