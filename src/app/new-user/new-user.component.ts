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
  subtitle: string;

  constructor(
    private userService: UserService,
    private location: Location,
  ) { }

  ngOnInit() {
    this.subtitle = 'new user';
    this.user = new User('', '', '', '');
  }

  addUser(): void {
    this
      .userService
      .addUser(this.user)
      .subscribe();
  }

  onSubmit(): void {
    this.addUser();
    setTimeout(() => this.goBack(), 1000);
  }

  goBack(): void {
    this.location.back();
  }
}
