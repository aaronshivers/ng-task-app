import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent implements OnInit {
  task: Task;
  subtitle = 'update task';

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private taskService: TaskService,
  ) { }

  ngOnInit() {
    this.getTask();
  }

  getTask(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.task = this.taskService.getTask(id);
  }

  goBack(): void {
    this.location.back();
  }

  updateTask(): void {

  }

  onSubmit(): void {
    this.updateTask();
    this.goBack();
  }
}
