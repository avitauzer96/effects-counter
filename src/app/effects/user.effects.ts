import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { LoadFailAction, LoadSuccessAction, LoadUsersAction, UserActionsTypes } from '../actions/user.actions';
import { FakeApiService } from '../services/fake-api.service';
import { IUser } from '../interfaces/user.interface';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class UserEffects {
  private _fakeApiService: FakeApiService;
  public constructor(
    private actions$: Actions,
    fakeApiService: FakeApiService
  ) {
    this._fakeApiService = fakeApiService;
  }
  
  @Effect()
  public loadUsers: Observable<Action> = this.actions$
    .ofType(UserActionsTypes.LOAD_USERS)
    .startWith(new LoadUsersAction())
    .switchMap(() => {
      return this._fakeApiService.getUsers()
        .map((users: IUser[]) => new LoadSuccessAction(users))
        .catch(error => Observable.of(new LoadFailAction(error)));
    });
  
}
