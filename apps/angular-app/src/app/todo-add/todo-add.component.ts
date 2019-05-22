import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Guid } from 'guid-typescript';
import { HistoryService } from '../services/history.service';
import { Constants } from '../constants/constants';

@Component({
  selector: 'carpediem-sample-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

  addForm: FormGroup;

  @Output() submitted = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private historyService: HistoryService
  ) { }

  ngOnInit() {
    
    this.addForm = this.fb.group({
      id: ['', Validators.required],
      todo: ['', Validators.required],
      date: ['', Validators.required]
    });

    this.historyService.add(Constants.FORM_CREATED);
  }

  addTodo() {
    this.addForm.get('id').patchValue(Guid.create().toString());
    this.addForm.get('date').patchValue(new Date().toLocaleTimeString());

    if (this.addForm.valid) {
      this.submitted.emit(this.addForm.value);
    }

    this.historyService.add(Constants.TODO_ADDED);

    this.clearForm();
  }

  clearForm() {
    this.addForm.reset();
  }


}
