import { IUser } from '../interfaces/user.interface';
import { CounterActionTypes } from '../actions/counter.actions';

export const USERS: IUser[] = [
  {
    username: 'john89',
    permissions: [
      { type: CounterActionTypes.INCREASE }
    ]
  },
  {
    username: 'adam777',
    permissions: [
      { type: CounterActionTypes.DECREASE }
    ]
  },
  {
    username: 'kate18',
    permissions: [
      { type: CounterActionTypes.INCREASE },
      { type: CounterActionTypes.DECREASE }
    ]
  }
];
