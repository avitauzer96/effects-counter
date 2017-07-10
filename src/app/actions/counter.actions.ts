import { Action } from '@ngrx/store';
import { IUser } from '../interfaces/user.interface';
import 'rxjs/add/operator/catch';

export class CounterActionTypes {
  static readonly TRY_ACCESS: string = '[Counter] Try Access';
  static readonly INCREASE: string = '[Counter] Increase';
  static readonly DECREASE: string = '[Counter] Decrease';
  static readonly ACTION_NOT_ALLOWED: string = '[Counter] Action Not Allowed';
}

export interface TryAccessPayload {
  user: IUser;
  action: any;
}

export class TryAccessAction implements Action {
  readonly type = CounterActionTypes.TRY_ACCESS;
  public payload: TryAccessPayload;
  
  public constructor(user: IUser, action: any) {
    this.payload = {
      user: user,
      action: action
    };
  }
}

export class IncreaseAction implements Action {
  readonly type = CounterActionTypes.INCREASE;
}

export class DecreaseAction implements Action {
  readonly type = CounterActionTypes.DECREASE;
}

export class NotAllowedAction implements Action {
  readonly type = CounterActionTypes.ACTION_NOT_ALLOWED;
  
  public constructor(public payload: string) { }
}
