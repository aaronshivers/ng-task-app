import { Component } from '@angular/core';

import { Task } from '../task';
import { TaskService } from '../task.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: [ './tasks.component.scss' ],
})
export class TasksComponent {
  tasks: Task[];
  subtitle = 'tasks';

  constructor(public taskService: TaskService, private location: Location) {
  }

  goBack(): void {
    this.location.back();
  }
}
