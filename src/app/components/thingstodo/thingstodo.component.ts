import { Component, OnInit } from '@angular/core';
import {Todo} from './../../Modules/Todo' 
@Component({
  selector: 'app-thingstodo',
  templateUrl: './thingstodo.component.html',
  styleUrls: ['./thingstodo.component.css']
})
export class ThingstodoComponent implements OnInit {
  todo:Todo[];
  inputTodo:string="";

  constructor() { }

  ngOnInit(): void {
    this.todo=[{
      content:'first todo',
  completed:false
},
{
content:'Second todo',
completed:false

}
]
  }
  // } this code is so that when you click on the 
  // task it cancels it out as done

  toggleDone(id:number){
this.todo.map((v,i)=>{
if(i==id) v.completed =!v.completed;
return v;
})
  }
  delete(id:number){
this.todo=this.todo.filter((v,i)=>i !==id)

  }
addTodo(){

  this.todo.push({
    content:this.inputTodo,
  completed:false
  });
  this.inputTodo="";
}

}
