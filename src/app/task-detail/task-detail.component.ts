import { Component, Inject, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent implements OnInit {
  task: Task;
  subtitle = 'update task';
  taskId: string;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private taskService: TaskService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {
    this.taskId = this.data;
    this.getTask();
  }

  getTask(): void {
    this.task = this.taskService.getTask(this.taskId);
  }

  goBack(): void {
    this.location.back();
  }

  updateTask(): void {

  }

  onSubmit(): void {
    this.updateTask();
  }
}
