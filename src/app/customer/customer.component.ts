import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { setName } from '../../store/customer/customer.actions';
import { AppState } from '../../store/customer/customer.state';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  standalone:true,
  imports:[ReactiveFormsModule],
})
export class CustomerComponent {
  form: FormGroup;
  storedName$: Observable<string>;

  constructor(private fb: FormBuilder, private store: Store<AppState>) {
    this.form = this.fb.group({
      name: ['']
    });

    this.storedName$ = this.store.select(state => state.name.name);
  }

  onSubmit() {
    const nameValue = this.form.get('name')?.value;
    this.store.dispatch(setName({ name: nameValue }));
  }
}
