import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'carpediem-sample-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

  addForm: FormGroup;

  @Output() submitted = new EventEmitter();

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    
    this.addForm = this.fb.group({
      id: ['', Validators.required],
      todo: ['', Validators.required],
      date: ['', Validators.required]
    });

  }

  addTodo() {
    this.addForm.get('id').patchValue(Guid.create().toString());
    this.addForm.get('date').patchValue(new Date().toLocaleTimeString());

    if (this.addForm.valid) {
      this.submitted.emit(this.addForm.value);
    }

    this.clearForm();
  }

  clearForm() {
    this.addForm.reset();
  }


}
