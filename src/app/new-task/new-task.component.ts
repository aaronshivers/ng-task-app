import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: [ './new-task.component.scss' ],
})
export class NewTaskComponent implements OnInit {

  constructor(private taskService: TaskService, private location: Location) {
  }

  ngOnInit() {
  }

  addTask(value: string): void {
    this.taskService.addTask(value);
  }

  goBack(): void {
    this.location.back();
  }

  onSubmit(value: string): void {
    this.addTask(value);
    this.goBack();
  }
}
