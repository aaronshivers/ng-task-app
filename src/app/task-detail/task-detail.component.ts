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
  tasks: Task[] = [];
  task: Task;

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
    // console.log(id);
    // this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
    this.task = this.taskService.getTask(id);
    // console.log(this.task);
  }

  goBack(): void {
    this.location.back();
  }
}
