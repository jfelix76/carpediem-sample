import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { Guid } from 'guid-typescript';
import { History } from '../interface/todos';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  log = new ReplaySubject();

  logs = new Array<History>();

  constructor() { }

  add(status: string, todo) {
    this.logs.push({
      id: Guid.create().toString(),
      todo,
      status,
      date: new Date().toLocaleTimeString()
    });
    this.log.next(this.logs);
  }
}
