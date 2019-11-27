import { Component, Inject, OnInit, Output, ViewChild } from '@angular/core';
import { User } from '../user';
import { Location } from '@angular/common';
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: [ './update-user.component.scss' ],
})
export class UpdateUserComponent implements OnInit {
  @ViewChild('f', { static: false }) updateUserForm: NgForm;
  @Output() user: User;
  userId: number;
  subtitle = 'update user';

  constructor(
    private location: Location,
    private userService: UserService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
  }

  ngOnInit() {
    this.userId = this.data;
    this.getUser();
  }

  getUser(): void {
    this
      .userService
      .getUser(this.userId)
      // @ts-ignore
      // tslint:disable-next-line:no-shadowed-variable
      .subscribe(({ id, username, email, first_name: firstName, last_name: lastName }) => {
        this.user = { id, username, email, firstName, lastName };
      });
  }

  updateUser(): void {
    this.userService.updateUser(this.userId, this.user).subscribe();
  }

  onSubmit(): void {
    this.updateUser();
  }
}
