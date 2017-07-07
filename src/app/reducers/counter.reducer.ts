import { Action } from '@ngrx/store';
import { CounterActionTypes } from '../actions/counter.actions';
import { ICounter } from '../interfaces/counter.interfacet';

const COUNTER_DEFAULT: ICounter = {
  value: 0,
  error: ''
};

export function counterReducer(state: ICounter = COUNTER_DEFAULT, action: Action) {
  switch (action.type) {
    case CounterActionTypes.ACTION_NOT_ALLOWED:
      return Object.assign({}, state, {error: action.payload});
    case CounterActionTypes.INCREASE:
      return Object.assign({}, state, {value: ++state.value, error: ''});
    case CounterActionTypes.DECREASE:
      return Object.assign({}, state, {value: --state.value, error: ''});
    default:
      return state;
  }
}
