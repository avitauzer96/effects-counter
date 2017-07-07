import { IPermissions } from './permissions.interface';
import {
  DecreaseAction, DecreaseNotAllowedAction, IncreaseAction,
  IncreaseNotAllowedAction
} from '../actions/counter.actions';
import { Observable } from 'rxjs/Observable';

type ActionTypes = IncreaseAction | DecreaseAction | IncreaseNotAllowedAction | DecreaseNotAllowedAction;

export interface IUser {
  username: string;
  permissions: IPermissions;
  checkPermissions?: () => Observable<ActionTypes>;
}
