import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.scss']
})
export class TaskInputComponent implements OnInit {

  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

  addTask(value: string): void {
    this.taskService.addTask(value);
  }
}
