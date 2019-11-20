import { Injectable } from '@angular/core';
import { TASKS } from './tasks';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasks = TASKS;

  constructor() { }

  getTasks(): Task[] {
    return this.tasks;
  }
}
