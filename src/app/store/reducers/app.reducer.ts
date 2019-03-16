import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { routerReducer } from '@ngrx/router-store';
import { userReducer } from './user.reducer';
import { configReducer } from './config.reducer';
import { chatReducer } from './chat.reducer';

export const appReducer: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  users: userReducer,
  config: configReducer,
  chat: chatReducer
};
