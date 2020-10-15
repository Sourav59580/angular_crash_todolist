import { Component } from '@angular/core';
import {} from './components/todos/todos.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-crash-todolist';
  constructor(){
    console.warn(123)
  }
}
