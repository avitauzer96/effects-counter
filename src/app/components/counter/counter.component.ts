import { Component, OnInit } from '@angular/core';
import { IUser } from '../../interfaces/user.interface';
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
import { SetActiveUserAction } from '../../actions/user.actions';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  public users: IUser[] = [];
  public selectedUser: IUser;
  public counter: ICounter;
  private _store: Store<AppState>;
  
  public constructor(store: Store<AppState>) {
    this._store = store;
  }
  
  public ngOnInit(): void {
    this._store
      .select('counter')
      .subscribe((counter: ICounter): void => {
        this.counter = counter;
      });
    
    this._store
      .select('users')
      .subscribe((users: IUser[]): void => {
        this.users = users;
      });
    
    this._store
      .select('activeUser')
      .subscribe((user: IUser): void => {
        this.selectedUser = user;
      });
  }
  
  public selectUser(index: number): void {
    this._store.dispatch(new SetActiveUserAction(this.users[index]));
  }
  
  @Permission(new IncreaseAction())
  public increaseCounter(store: Store<AppState>): void { }
  
  @Permission(new DecreaseAction())
  public decreaseCounter(store: Store<AppState>): void { }
}
