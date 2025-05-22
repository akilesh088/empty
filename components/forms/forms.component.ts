import { Component,OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-forms',
  imports: [FormsModule,CommonModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent implements OnInit{
  username:string="";
  submitted:boolean=false;

  ngOnInit(){}

  submit(result:{username:string}){
    this.username=result.username;
    this.submitted=true;
  }

}
