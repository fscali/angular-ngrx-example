import { IChatState } from '../state/chat.state';
import { ChatActions, EChatActions } from '../actions/chat.action';

export const chatReducer = (
  state: IChatState,
  action: ChatActions
): IChatState => {
  switch (action.type) {
    case EChatActions.SwitchVisible:
      return {
        ...state,
        minimized: !state.minimized
      };
      break;
    case EChatActions.SendText:
      const newArray = state.pastText;
      newArray.push(action.payload);
      return {
        ...state,
        textboxText: '',
        pastText: newArray
      };
    case EChatActions.SendKey:
      return {
        ...state,
        textboxText: action.payload
      };
    default:
      return state;
  }
};
