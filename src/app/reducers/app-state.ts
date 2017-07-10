import { Action } from '@ngrx/store';
import { ICounter } from '../interfaces/counter.interfacet';
import { IUser } from '../interfaces/user.interface';

export interface AppState {
  counter: (state: ICounter, action: Action) => ICounter;
  users: (state: IUser[], action: Action) => IUser[];
  activeUser: (state: IUser, action: Action) => IUser;
}
