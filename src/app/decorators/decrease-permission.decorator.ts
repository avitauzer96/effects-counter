import { IUser } from '../interfaces/user.interface';
import { Observable } from 'rxjs/Observable';
import { CounterActionTypes, DecreaseAction, DecreaseNotAllowedAction } from '../actions/counter.actions';

export function DecreasePermission(target: any, key: string, descriptor: PropertyDescriptor) {
  if(descriptor === undefined) {
    descriptor = Object.getOwnPropertyDescriptor(target, key);
  }
  const originalMethod = descriptor.value;
  
  descriptor.value = function () {
    const user: IUser = arguments[0];
  
    user.checkPermissions = function () {
      if (this.permissions.canDecrease) {
        return Observable.of(new DecreaseAction());
      }
      return Observable.throw(`You are not allowed to perform "${CounterActionTypes.DECREASE}" action.`)
        .catch((error: string): Observable<DecreaseNotAllowedAction> => {
          return Observable.of(new DecreaseNotAllowedAction(error))
        });
    };
    
    return originalMethod.apply(this, arguments);
  };
  
  return descriptor;
}
