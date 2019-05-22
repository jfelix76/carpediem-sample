import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'carpediem-sample-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title = 'Nx with Angular';

  constructor() { }

  ngOnInit() {
  }

}
