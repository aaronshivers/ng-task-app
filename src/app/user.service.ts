import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: User[];
  private usersUrl = 'https://task-master-api.herokuapp.com/users';

  constructor(private http: HttpClient) {
  }

  getUsers() {
    return this.http.get<User[]>(this.usersUrl);
  }
}
