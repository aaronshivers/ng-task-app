import { Component, OnInit } from '@angular/core';

import { Task } from '../task';
import { TaskService } from '../task.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: [ './tasks.component.scss' ],
})
export class TasksComponent implements OnInit {
  tasks: Task[];
  subtitle = 'tasks';
  displayedColumns: string[] = [ 'id', 'body', 'actions' ];

  constructor(public taskService: TaskService, private location: Location) {
  }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks() {
    this.tasks = this.taskService.getTasks();
  }

  goBack(): void {
    this.location.back();
  }

  deleteTask(id: any): void {
    this.taskService.deleteTask(id);
    this.getTasks();
  }
}
