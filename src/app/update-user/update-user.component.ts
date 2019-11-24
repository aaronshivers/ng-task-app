import { Component, OnInit, ViewChild } from '@angular/core';
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
