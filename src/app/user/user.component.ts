import { Component, Inject, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: [ './user.component.scss' ],
})
export class UserComponent implements OnInit {
  userId: number;
  user: User;
  subtitle = 'user detail';

  constructor(
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

  deleteUser(): void {
    this.userService.deleteUser(this.userId).subscribe();
  }
}
