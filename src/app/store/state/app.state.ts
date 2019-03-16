import { IConfigState, initialConfigState } from './config.state';
import { IUserState, initialUserState } from './user.state';

import { RouterReducerState } from '@ngrx/router-store';
import { IChatState, initialChatState } from './chat.state';

export interface IAppState {
  router?: RouterReducerState;
  config: IConfigState;
  users: IUserState;
  chat: IChatState;
}

export const initialAppState: IAppState = {
  config: initialConfigState,
  users: initialUserState,
  chat: initialChatState
};

export function getInitialAppState(): IAppState {
  return initialAppState;
}
