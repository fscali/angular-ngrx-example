import { IConfigState, initialConfigState } from './config.state';
import { IUserState, initialUserState } from './user.state';

import { RouterReducerState } from '@ngrx/router-store';

export interface IAppState {
  router?: RouterReducerState;
  config: IConfigState;
  users: IUserState;
}

export const initialAppState: IAppState = {
  config: initialConfigState,
  users: initialUserState
};

export function getInitialAppState(): IAppState {
  return initialAppState;
}
