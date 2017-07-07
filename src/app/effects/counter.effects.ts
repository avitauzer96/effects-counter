import { Injectable } from '@angular/core';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { CounterActionTypes } from '../actions/counter.actions';
import { IUser } from '../interfaces/user.interface';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class CounterEffects {
  public constructor(
    private actions$: Actions
  ) { }
  
  @Effect()
  public $requestAccess: Observable<Action> = this.actions$
    .ofType(CounterActionTypes.REQUEST_INCREASE, CounterActionTypes.REQUEST_DECREASE)
    .map(toPayload)
    .switchMap((user: IUser) => user.checkPermissions());
}
