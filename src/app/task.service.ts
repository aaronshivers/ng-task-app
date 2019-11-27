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

  saveTask(task: Task): void {
    this.tasks.push(task);
  }

  deleteTask(id: string): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  getTask(id: string): Task {
    return this.tasks.filter(task => task.id === id)[0];
  }
}
