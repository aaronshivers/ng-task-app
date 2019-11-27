import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import { UserService } from '../user.service';
import { Location } from '@angular/common';
import { UserComponent } from '../user/user.component';
import { MatDialog } from '@angular/material/dialog';
import { UpdateUserComponent } from '../update-user/update-user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: [ './users.component.scss' ],
})
export class UsersComponent implements OnInit {
  users: User[];
  subtitle: string;
  displayedColumns: string[] = [ 'id', 'username', 'email', 'firstName', 'lastName', 'actions' ];

  constructor(
    public userService: UserService,
    public location: Location,
    public dialog: MatDialog,
  ) {
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

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(() => this.getUsers());
  }

  viewUser(id: number): void {
    const dialogRef = this.dialog.open(UserComponent, {
      data: id,
    });

    dialogRef.afterClosed().subscribe(() => this.getUsers());
  }

  updateUser(id: number): void {
    this.dialog.open(UpdateUserComponent, { data: id });
  }
}
