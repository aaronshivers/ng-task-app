import { Component } from '@angular/core';

import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: [ './tasks.component.scss' ],
})
export class TasksComponent {
  tasks: Task[];

  constructor(public taskService: TaskService) {
  }
}
