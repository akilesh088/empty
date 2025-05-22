import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-directives',
  imports: [NgStyle,NgClass,FormsModule,CommonModule],
  
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {

  dark="";

  changeColor(){
      this.dark="right";
  }
  changeColor1(){
    this.dark="wrong"
  }

  name:string="";

  hidden:boolean=false;

  show(){
    this.hidden= !this.hidden;
  }
  sho:boolean=true;
  show2(){
    this.sho = !this.sho;
  }

  numbers=[1,2,3,4,5,6,8];

  students: any[] = [ 
    { "id": 1,"name": "akil 1"}, 
    { "id": 2,"name": "akil 2"}, 
    { "id": 3,"name": "akil 3"},
    { "id": 4,"name": "akil 4"} 
  ];

  index(index:number,students:any):number{
    return students.id;
  }

  col:string="blue";

}
