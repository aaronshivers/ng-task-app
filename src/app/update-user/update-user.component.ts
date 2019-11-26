import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { User } from '../user';
import { Location } from '@angular/common';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: [ './update-user.component.scss' ],
})
export class UpdateUserComponent implements OnInit {
  @ViewChild('f', { static: false }) updateUserForm: NgForm;
  @Output() user: User;
  id: number = +this.route.snapshot.paramMap.get('id');
  subtitle = 'update user';

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
      // @ts-ignore
      // tslint:disable-next-line:no-shadowed-variable
      .subscribe(({ id, username, email, first_name: firstName, last_name: lastName }) => {
        this.user = { id, username, email, firstName, lastName };
      });
  }

  updateUser(): void {
    this.userService.updateUser(this.id, this.user).subscribe();
  }

  onSubmit(): void {
    this.updateUser();
    setTimeout(() => this.goBack(), 1000);
  }

  goBack(): void {
    this.location.back();
  }
}
