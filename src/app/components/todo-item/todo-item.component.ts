import { Todo } from './../../models/Todo';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo:Todo;
  constructor() { }

  ngOnInit(): void {
  }

  setClasses(){
    let classes = {
      todo: true,
      'is-completed': this.todo.completed
    }
    return classes;
  }
  onToggle(todo){
    todo.completed = !todo.completed;
  }

  onDelete(todo){
    console.log("todo delete")
  }

}
