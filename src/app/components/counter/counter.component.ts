import { Component, OnInit } from '@angular/core';
import { IUser } from '../../interfaces/user.interface';
import { USERS } from '../../mock/users.mock';
import { Store } from '@ngrx/store';
import { AppState } from '../../reducers/app-state';
import { RequestDecreaseAction, RequestIncreaseAction } from '../../actions/counter.actions';
import { IncreasePermission} from '../../decorators/increase-permission.decorator';
import { DecreasePermission } from '../../decorators/decrease-permission.decorator';
import { ICounter } from '../../interfaces/counter.interfacet';

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
  
  @IncreasePermission
  public increaseCounter(user: IUser): void {
    this._store.dispatch(new RequestIncreaseAction(user));
  }
  
  @DecreasePermission
  public decreaseCounter(user: IUser): void {
    this._store.dispatch(new RequestDecreaseAction(user));
  }
  
  private _generateAccessStatus(canAccess: boolean): string {
    return canAccess ? 'Yes' : 'No';
  }
  
  
}
