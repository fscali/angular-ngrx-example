import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { routerReducer } from '@ngrx/router-store';
import { userReducer } from './user.reducer';
import { configReducer } from './config.reducer';

export const appReducer: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  users: userReducer,
  config: configReducer
};
