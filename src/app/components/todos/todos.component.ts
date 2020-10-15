import { Component, OnInit } from '@angular/core';
import {Todo} from '../../models/Todo'
import {} from '../todo-item/todo-item.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[];

  constructor() {
    this.todos = [
      {
        id:1,
        title:"Work hard",
        completed:true
      },
      {
        id:2,
        title:"Todo two",
        completed:false
      },
      {
        id:3,
        title:"Todo three",
        completed:false
      },
      {
        id:4,
        title:"Todo four",
        completed:true
      },
    ]
   }

  ngOnInit(): void {
  }

}
