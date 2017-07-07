import { IUser } from '../interfaces/user.interface';
import { Observable } from 'rxjs/Observable';
import { CounterActionTypes, IncreaseAction, IncreaseNotAllowedAction } from '../actions/counter.actions';

export function IncreasePermission(target: any, key: string, descriptor: PropertyDescriptor) {
  if(descriptor === undefined) {
    descriptor = Object.getOwnPropertyDescriptor(target, key);
  }
  const originalMethod = descriptor.value;
  
  descriptor.value = function () {
    const user: IUser = arguments[0];
  
    user.checkPermissions = function () {
      if (this.permissions.canIncrease) {
        return Observable.of(new IncreaseAction());
      }
      return Observable.throw(`You are not allowed to perform "${CounterActionTypes.INCREASE}" action.`)
        .catch((error: string): Observable<IncreaseNotAllowedAction> => {
          return Observable.of(new IncreaseNotAllowedAction(error))
        });
    };
    
    return originalMethod.apply(this, arguments);
  };
  
  return descriptor;
}
