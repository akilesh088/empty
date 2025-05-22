import { Component } from '@angular/core';
import { LifecycleComponent } from '../lifecycle/lifecycle.component';
@Component({
  selector: 'app-parent',
  imports: [LifecycleComponent],
  standalone:true,
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  count:number=0;

  incCount(){
    this.count+=1;
  }
}
