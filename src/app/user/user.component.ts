import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: [ './user.component.scss' ],
})
export class UserComponent implements OnInit {
  user: User;

  constructor(
    private userService: UserService,
    private location: Location,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this
      .userService
      .getUser(id)
      .subscribe(response => {
        this.user = response;
      });
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe();
    // todo: get the users list to automatically refresh after deleting a user
    setTimeout(() => this.goBack(), 1000);
  }

  goBack() {
    this.location.back();
  }
}
