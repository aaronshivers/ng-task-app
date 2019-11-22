import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: [ './users.component.scss' ],
})
export class UsersComponent implements OnInit {
  users: User[];

  constructor(public userService: UserService) {
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this
      .userService
      .getUsers()
      .subscribe(response => {
        this.users = response;
      });
    console.log('hi', this.users);
  }

}
