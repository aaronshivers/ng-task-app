import { Injectable } from '@angular/core';
import { TASKS } from './tasks';
import { Task } from './task';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  tasks = TASKS;

  constructor() { }

  getTasks(): Task[] {
    return this.tasks;
  }

  // todo: figure out what to use for the id
  addTask(value: string) {
    console.log(value);
    // const task = new Task(uuid(), value);
    this.tasks.push({ id: 33, body: value });
  }

  // todo: add data type
  // todo: figure out why removeTask() doesn't work
  // removeTask(id): void {
  //   console.log(id);
  //   this.tasks = this.tasks.filter(task => task.id !== id);
  // }
}
