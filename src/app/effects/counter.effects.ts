import { Injectable } from '@angular/core';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { CounterActionTypes, TryAccessPayload } from '../actions/counter.actions';
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
    .ofType(CounterActionTypes.TRY_ACCESS)
    .map(toPayload)
    .switchMap((payload: TryAccessPayload) =>  Observable.of(payload.action));
}
