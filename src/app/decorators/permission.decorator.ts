import { IUser } from '../interfaces/user.interface';
import { IPermission } from '../interfaces/permission.interface';
import { AppState } from '../reducers/app-state';
import { Action, Store } from '@ngrx/store';
import { NotAllowedAction, TryAccessAction } from '../actions/counter.actions';
import { Subscription } from 'rxjs/Subscription';

export function Permission(action: Action) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    if(descriptor === undefined) {
      descriptor = Object.getOwnPropertyDescriptor(target, propertyKey);
    }
    
    descriptor.value = function () {
      const store: Store<AppState> = arguments[0];
  
      const subscription: Subscription = store.select('activeUser')
        .subscribe((user: IUser): void => {
          const hasPermission: boolean = user.permissions.some((item: IPermission) => {
            return item.type === action.type;
          });
  
          if (hasPermission) {
            store.dispatch(new TryAccessAction(user, action));
          } else if (!hasPermission && store) {
            store.dispatch(new NotAllowedAction(`You are not allowed to perform "${action.type}" action.`));
          }
        });
      
      subscription.unsubscribe();
    };
    
    return descriptor;
  }
}
