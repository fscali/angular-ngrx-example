import { IChat } from 'src/app/model/chat.model';

export interface IChatState {
  //chatState: IChat;
  minimized: boolean;
  textboxText: string;
  pastText: string[];
}

export const initialChatState: IChatState = {
  minimized: false,
  textboxText: '',
  pastText: []
};
