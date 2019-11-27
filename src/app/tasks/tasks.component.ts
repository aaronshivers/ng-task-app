import { Component, OnInit } from '@angular/core';

import { Task } from '../task';
import { TaskService } from '../task.service';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { TaskDetailComponent } from '../task-detail/task-detail.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: [ './tasks.component.scss' ],
})
export class TasksComponent implements OnInit {
  tasks: Task[];
  subtitle = 'tasks';
  displayedColumns: string[] = [ 'id', 'body', 'actions' ];

  constructor(
    public taskService: TaskService,
    private location: Location,
    public dialog: MatDialog,
  ) {
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

  updateTask(id: string): void {
    this.dialog.open(TaskDetailComponent, { data: id });
  }
}
