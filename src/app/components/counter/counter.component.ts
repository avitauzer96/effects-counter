import { Component, OnInit } from '@angular/core';
import { IUser } from '../../interfaces/user.interface';
import { USERS } from '../../mock/users.mock';
import { Store } from '@ngrx/store';
import { AppState } from '../../reducers/app-state';
import {
  CounterActionTypes,
  DecreaseAction,
  IncreaseAction,
  TryAccessAction
} from '../../actions/counter.actions';
import { ICounter } from '../../interfaces/counter.interfacet';
import { Permission } from '../../decorators/permission.decorator';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  public users: IUser[] = USERS;
  public selectedUser: IUser;
  public counter: ICounter;
  private _store: Store<AppState>;
  
  public constructor(store: Store<AppState>) {
    this._store = store;
    this.selectedUser = this.users[0];
  }
  
  public ngOnInit(): void {
    this._store
      .select('counter')
      .subscribe((counter: ICounter): void => {
        this.counter = counter;
      });
  }
  
  public selectUser(index: number): void {
    this.selectedUser = this.users[index];
  }
  
  @Permission(CounterActionTypes.INCREASE)
  public increaseCounter(user: IUser): void {
    const action: IncreaseAction = new IncreaseAction();
    this._store.dispatch(new TryAccessAction(user, action));
  }
  
  @Permission(CounterActionTypes.DECREASE)
  public decreaseCounter(user: IUser): void {
    const action: DecreaseAction = new DecreaseAction();
    this._store.dispatch(new TryAccessAction(user, action));
  }
  
  private _generateAccessStatus(canAccess: boolean): string {
    return canAccess ? 'Yes' : 'No';
  }
  
  
}
