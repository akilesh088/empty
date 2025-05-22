import { Component,Input, SimpleChanges } from '@angular/core';
import { OnChanges,OnInit } from '@angular/core';
@Component({
  selector: 'app-lifecycle',
  imports: [],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css'
})
export class LifecycleComponent implements OnChanges,OnInit{
  @Input() count:number=0;
  
  constructor(){
    console.log('Constructor: Component created');
  }


  // OnChange() triggers when @Input property changes


  ngOnChanges(changes: SimpleChanges): void {
    console.log('on change triggred:',changes);
    console.log('old count:',changes['count']?.previousValue);
    console.log('new value:',changes['count']?.currentValue);
  }

  // OnInit() triggers when component inputs are intialized

  message:string='';

  ngOnInit(): void {

    this.message='message variable initialized';
  }
}
