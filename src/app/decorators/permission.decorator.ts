import { IUser } from '../interfaces/user.interface';
import { IPermission } from '../interfaces/permission.interface';

export function Permission(action: string) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    if(descriptor === undefined) {
      descriptor = Object.getOwnPropertyDescriptor(target, propertyKey);
    }
    
    const originalMethod = descriptor.value;
  
    descriptor.value = function () {
      const user: IUser = arguments[0];
      const hasPermission: boolean = user.permissions.some((item: IPermission) => item.type === action);
      
      if (hasPermission) {
         originalMethod.apply(this, arguments);
      }
    };
  
    return descriptor;
  }
}
