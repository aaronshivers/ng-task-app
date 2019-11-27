import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.scss' ],
})
export class HomeComponent implements OnInit {
  userCount: number;
  taskCount: number;

  constructor(
    private userService: UserService,
    private taskService: TaskService,
  ) {
  }

  ngOnInit() {
    this.getUserCount();
    this.getTaskCount();
  }

  getUserCount(): void {
    this.userService.getUsers().subscribe(response => {
      this.userCount = response.length;
    });
  }

  getTaskCount(): void {
    this.taskCount = this.taskService.getTasks().length;
  }

}
