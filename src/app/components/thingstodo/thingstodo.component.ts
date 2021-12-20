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
      content:"",
  completed:false
  
},


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
  edit(id:number){


  }
  delete(id:number){
this.todo=this.todo.filter((v,i)=>i !==id)

  }
addTodo(){
 if(this.inputTodo=="")//this is to ensure that null values are not aaded as tasks//
  {return null;
}else{
  this.todo.push({
    content:this.inputTodo,
  completed:false
  });
  this.inputTodo="";
}
}
}
