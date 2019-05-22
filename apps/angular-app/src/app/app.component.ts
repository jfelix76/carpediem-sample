import { Component } from '@angular/core';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { Todo } from './interface/todos';

@Component({
  selector: 'carpediem-sample-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  todo: Todo;
  
  addTodo(item: Todo) {
    this.todo = item;
    console.log('item added', item);
  }
}
