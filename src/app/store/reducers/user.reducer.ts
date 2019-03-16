import { IUserState, initialUserState } from '../state/user.state';
import { EUserActions, UserActions } from '../actions/user.action';

export const userReducer = (
  state: IUserState = initialUserState,
  action: UserActions
): IUserState => {
  switch (action.type) {
    case EUserActions.GetUserSuccess:
      return {
        ...state,
        selectedUser: action.payload
      };
      break;
    case EUserActions.GetUsersSuccess:
      return {
        ...state,
        users: action.payload
      };
      break;
    default:
      return state;
  }
};
