import { IConfigState, initialConfigState } from '../state/config.state';
import { ConfigActions, EConfigActions } from '../actions/config.action';

export const configReducer = (
  state: IConfigState = initialConfigState,
  action: ConfigActions
): IConfigState => {
  switch (action.type) {
    case EConfigActions.GetConfigSuccess:
      return {
        ...state,
        config: action.payload
      };
      break;
    default:
      return state;
  }
};
