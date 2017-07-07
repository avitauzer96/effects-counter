import { IPermission } from './permission.interface';
import { NotAllowedAction, DecreaseAction, IncreaseAction } from '../actions/counter.actions';
import { Observable } from 'rxjs/Observable';

type ActionTypes = IncreaseAction | DecreaseAction | NotAllowedAction;

export interface IUser {
  username: string;
  permissions: IPermission[];
  checkPermissions?: () => Observable<ActionTypes>;
}
