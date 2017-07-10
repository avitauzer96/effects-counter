import { Action } from '@ngrx/store';
import { IUser } from '../interfaces/user.interface';
import { UserActionsTypes } from '../actions/user.actions';

export function activeUserReducer(state: IUser, action: Action) {
  switch (action.type) {
    case UserActionsTypes.SET_ACTIVE_USER:
      return action.payload;
    default:
      return state;
  }
}
