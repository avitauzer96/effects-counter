import { Action } from '@ngrx/store';
import { ICounter } from '../interfaces/counter.interfacet';

export interface AppState {
  counter: (state: ICounter, action: Action) => ICounter;
}
