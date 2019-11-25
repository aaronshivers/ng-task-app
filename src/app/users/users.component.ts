import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import { UserService } from '../user.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: [ './users.component.scss' ],
})
export class UsersComponent implements OnInit {
  users: User[];
  subtitle: string;

  constructor(public userService: UserService, public location: Location) {
  }

  ngOnInit() {
    this.subtitle = 'users';
    this.getUsers();
  }

  getUsers() {
    this
      .userService
      .getUsers()
      .subscribe(response => {
        this.users = response;
      });
  }

  goBack(): void {
    this.location.back();
  }
}
