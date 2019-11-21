import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

  removeTask() {
    this.taskService.removeTask(this.task.id);
  }
}
