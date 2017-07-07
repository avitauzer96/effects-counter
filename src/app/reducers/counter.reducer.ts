import { Action } from '@ngrx/store';
import { CounterActionTypes } from '../actions/counter.actions';
import { ICounter } from '../interfaces/counter.interfacet';

const COUNTER_DEFAULT: ICounter = {
  value: 0,
  error: ''
};

export function counterReducer(state: ICounter = COUNTER_DEFAULT, action: Action) {
  let counter: ICounter;
  switch (action.type) {
    case CounterActionTypes.REQUEST_INCREASE:
    case CounterActionTypes.REQUEST_DECREASE:
      return state;
    case CounterActionTypes.INCREASE_NOT_ALLOWED:
    case CounterActionTypes.DECREASE_NOT_ALLOWED:
      return Object.assign({}, state, {error: action.payload});
    case CounterActionTypes.INCREASE:
      counter = {
        value: ++state.value,
        error: ''
      };
      return Object.assign({}, state, counter);
    case CounterActionTypes.DECREASE:
       counter = {
        value: --state.value,
        error: ''
      };
      return Object.assign({}, state, counter);
    default:
      return state;
  }
}
