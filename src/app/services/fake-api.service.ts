import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/user.interface';
import { USERS } from '../mock/users.mock';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FakeApiService {
  private _users: IUser[] = USERS;
  
  public getUsers() {
    return Observable.of(this._users);
  }
}
