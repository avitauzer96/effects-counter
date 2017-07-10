import { IUser } from '../interfaces/user.interface';
import { IPermission } from '../interfaces/permission.interface';
import { AppState } from '../reducers/app-state';
import { Store } from '@ngrx/store';
import { NotAllowedAction } from '../actions/counter.actions';

export function Permission(action: string) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    if(descriptor === undefined) {
      descriptor = Object.getOwnPropertyDescriptor(target, propertyKey);
    }
    
    const originalMethod = descriptor.value;
  
    descriptor.value = function () {
      const user: IUser = arguments[0];
      const store: Store<AppState> = arguments[1];
      
      const hasPermission: boolean = user.permissions.some((item: IPermission) => item.type === action);
  
      if (hasPermission) {
        originalMethod.apply(this, arguments);
      } else if (!hasPermission && store) {
        store.dispatch(new NotAllowedAction(`You are not allowed to perform "${action}" action.`));
      }
    };
    
    return descriptor;
  }
}
