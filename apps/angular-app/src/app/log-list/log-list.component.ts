import { Component, OnInit } from '@angular/core';
import { History } from '../interface/todos';
import { Observable } from 'rxjs';
import { HistoryService } from '../services/history.service';

@Component({
  selector: 'carpediem-sample-log-list',
  templateUrl: './log-list.component.html',
  styleUrls: ['./log-list.component.scss']
})
export class LogListComponent implements OnInit {

  item: History;
  items$ = new Observable<any>();

  constructor(private historyService: HistoryService) { }

  ngOnInit() {
    this.items$ = this.historyService.log;
    this.historyService.log.subscribe((data) => console.log('what is log', data));
  }

}
