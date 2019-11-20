import { Component, Input, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
import { Task } from '../task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;

  constructor(private tasksService: TasksService) { }

  ngOnInit() {
  }

  removeTask() {
    this.tasksService.removeTask(this.task.id);
  }

  editTask() {
  }
}
