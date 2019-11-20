import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.scss']
})
export class TaskInputComponent implements OnInit {

  constructor(private tasksService: TasksService) { }

  ngOnInit() {
  }

  addTask(value: string): void {
    this.tasksService.addTask(value);
  }
}
