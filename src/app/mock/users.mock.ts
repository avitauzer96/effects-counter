import { IUser } from '../interfaces/user.interface';

export const USERS: IUser[] = [
  {
    username: 'john89',
    permissions: {
      canIncrease: true,
      canDecrease: false
    }
  },
  {
    username: 'adam777',
    permissions: {
      canIncrease: false,
      canDecrease: true
    }
  },
  {
    username: 'kate18',
    permissions: {
      canIncrease: true,
      canDecrease: true
    }
  }
];
