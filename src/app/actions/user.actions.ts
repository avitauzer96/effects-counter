import { Action } from '@ngrx/store';
import { IUser } from '../interfaces/user.interface';

const LOAD_USERS = '[User] Load Users';
const LOAD_SUCCESS = '[User] Load Success';
const LOAD_FAIL = '[User] Load User Fail';
const SET_ACTIVE_USER = '[User] Set Active User';

export class UserActionsTypes {
  static readonly LOAD_USERS = LOAD_USERS;
  static readonly LOAD_SUCCESS = LOAD_SUCCESS;
  static readonly LOAD_FAIL = LOAD_FAIL;
  static readonly SET_ACTIVE_USER = SET_ACTIVE_USER;
}

export class LoadUsersAction implements Action {
  readonly type = UserActionsTypes.LOAD_USERS;
}

export class LoadSuccessAction implements Action {
  readonly type = UserActionsTypes.LOAD_SUCCESS;
  
  public constructor(public payload: IUser[]) { }
}

export class LoadFailAction implements Action {
  readonly type = UserActionsTypes.LOAD_FAIL;
  
  public constructor(public payload: string) { }
}

export class SetActiveUserAction implements Action {
  readonly type = UserActionsTypes.SET_ACTIVE_USER;
  
  public constructor(public payload: IUser) { }
}
