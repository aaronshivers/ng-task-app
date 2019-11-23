import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Location } from '@angular/common';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: [ './update-user.component.scss' ],
})
export class UpdateUserComponent implements OnInit {
  user: User;
  id: number = +this.route.snapshot.paramMap.get('id');


  constructor(
    private location: Location,
    private userService: UserService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    this
      .userService
      .getUser(this.id)
      .subscribe(response => this.user = response);
  }

  updateUser(value: User): void {
    this.userService.updateUser(this.id, value).subscribe();
  }

  onSubmit(value: User): void {
    console.log(value);
    this.updateUser(value);
  }

  goBack(): void {
    this.location.back();
  }
}
