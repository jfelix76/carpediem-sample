import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { Todo } from '../interface/todos';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
import { HistoryService } from '../services/history.service';
import { Constants } from '../constants/constants';

@Component({
  selector: 'carpediem-sample-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, OnChanges {

  @Input() item: Todo;

  items = new Array<Todo>();

  items$ = new BehaviorSubject([]);

  constructor(private historyService: HistoryService) {}

  ngOnInit() {
    this.items.shift();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.items.push(this.item);
    this.items$.next(this.items);
  }

  removeTodo(item) {
    const element = this.items.findIndex((todo, index, arr) => {
      return arr[index] === item;
    });
    console.log('what is removed', element)

    this.items.splice(element, 1);

    this.historyService.add(Constants.TODO_REMOVED, item.todo);
  }

}
