import { v4 as uuid } from 'uuid';

import { Injectable } from '@angular/core';
import { TASKS } from './tasks';
import { Task } from './task';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  tasks: Task[] = TASKS;

  constructor() { }

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(value: string) {
    const task = new Task(uuid(), value);
    this.tasks.push(task);
  }

  // todo: figure out why removeTask() doesn't work
  removeTask(id: string): void {
    console.log(this.tasks);
    this.tasks = this.tasks.filter(task => task.id !== id);
    console.log(this.tasks);
  }
}
