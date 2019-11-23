import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Location } from '@angular/common';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: [ './new-user.component.scss' ],
})
export class NewUserComponent implements OnInit {
  user: User;

  constructor(
    private userService: UserService,
    private location: Location,
  ) { }

  ngOnInit() {
  }

  addUser(user: User): void {
    this
      .userService
      .addUser(user)
      .subscribe();
  }

  onSubmit(value: User): void {
    this.addUser(value);
    // todo: make goBack() run after adding user is completed
    setTimeout(() => this.goBack(), 1000);
  }

  goBack(): void {
    this.location.back();
  }
}
