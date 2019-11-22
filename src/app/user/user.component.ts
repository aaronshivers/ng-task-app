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
    this.goBack();
    this.userService.deleteUser(id).subscribe();
  }

  goBack() {
    this.location.back();
  }
}
