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
  }

  createTask(): void {
    this.task = new Task(uuid(), this.task.body);
  }

  saveTask(): void {
    this.taskService.saveTask(this.task);
  }

  goBack(): void {
    this.location.back();
  }

  onSubmit(): void {
    this.createTask();
    this.saveTask();
    this.goBack();
  }
}
