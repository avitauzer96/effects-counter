import { Action } from '@ngrx/store';
import { IUser } from '../interfaces/user.interface';
import { UserActionsTypes } from '../actions/user.actions';

export function userReducer(state: IUser[], action: Action) {
  switch (action.type) {
    case UserActionsTypes.LOAD_USERS:
      return state;
    case UserActionsTypes.LOAD_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
