import { v4 as uuid } from 'uuid';

import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Location } from '@angular/common';
import { Task } from '../task';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: [ './new-task.component.scss' ],
})
export class NewTaskComponent implements OnInit {
  task: Task;

  constructor(private taskService: TaskService, private location: Location) {
  }

  ngOnInit() {
    this.task = new Task('', '');
  }

  setTaskId(): void {
    this.task.id = uuid();
  }

  saveTask(): void {
    this.taskService.saveTask(this.task);
  }

  goBack(): void {
    this.location.back();
  }

  onSubmit(): void {
    this.setTaskId();
    this.saveTask();
    this.goBack();
  }
}
