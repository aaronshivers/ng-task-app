import { Component } from '@angular/core';

import { Task } from '../task';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: [ './tasks.component.scss' ],
})
export class TasksComponent {
  tasks: Task[];

  constructor(private tasksService: TasksService) {
  }
}
