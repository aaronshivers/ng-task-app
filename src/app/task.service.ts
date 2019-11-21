import { v4 as uuid } from 'uuid';

import { Injectable } from '@angular/core';
import { TASKS } from './tasks';
import { Task } from './task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks: Task[] = TASKS;

  constructor() { }

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(value: string) {
    const task = new Task(uuid(), value);
    this.tasks.push(task);
  }

  removeTask(id: string): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  getTask(id: string): Task {
    return this.tasks.filter(task => task.id === id)[0];
  }
}
