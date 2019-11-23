import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: User[];
  private usersUrl = 'https://task-master-api.herokuapp.com/users';

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${ this.usersUrl }/${ id }`);
  }

  deleteUser(id: number): Observable<{}> {
    return this.http.delete(`${ this.usersUrl }/${ id }`);
  }

  // tslint:disable-next-line:variable-name
  addUser({ username, firstName: first_name, lastName: last_name, email, }: User): Observable<{}> {
    return this
      .http
      .post(`${ this.usersUrl }`, { username, first_name, last_name, email, });
  }
}
