import { IAppState } from '../state/app.state';
import { createSelector } from '@ngrx/store';
import { IConfigState } from '../state/config.state';

const configSelector = (state: IAppState) => state.config;

export const selectConfig = createSelector(
  configSelector,
  (state: IConfigState) => state.config
);
