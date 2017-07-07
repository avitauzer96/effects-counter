import { Action } from '@ngrx/store';
import { IUser } from '../interfaces/user.interface';
import 'rxjs/add/operator/catch';

export class CounterActionTypes {
  static readonly REQUEST_INCREASE: string = '[Counter] Request Increase';
  static readonly REQUEST_DECREASE: string = '[Counter] Request Decrease';
  static readonly INCREASE: string = '[Counter] Increase';
  static readonly DECREASE: string = '[Counter] Decrease';
  static readonly INCREASE_NOT_ALLOWED: string = '[Counter] Increase Not Allowed';
  static readonly DECREASE_NOT_ALLOWED: string = '[Counter] Decrease Not Allowed';
}

export class RequestIncreaseAction implements Action {
  readonly type = CounterActionTypes.REQUEST_INCREASE;
  
  public constructor(public payload: IUser) { }
}

export class RequestDecreaseAction implements Action {
  readonly type = CounterActionTypes.REQUEST_DECREASE;
  
  public constructor(public payload: IUser) { }
}

export class IncreaseAction implements Action {
  readonly type = CounterActionTypes.INCREASE;
}

export class DecreaseAction implements Action {
  readonly type = CounterActionTypes.DECREASE;
}

export class IncreaseNotAllowedAction implements Action {
  readonly type = CounterActionTypes.INCREASE_NOT_ALLOWED;
  
  public constructor(public payload: string) { }
}

export class DecreaseNotAllowedAction implements Action {
  readonly type = CounterActionTypes.DECREASE_NOT_ALLOWED;
  
  public constructor(public payload: string) { }
}
