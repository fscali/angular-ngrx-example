import { IChat } from '../../model/chat.model';
import { Action } from '@ngrx/store';

export enum EChatActions {
  'SwitchVisible' = '[Chat] Switch Visible',
  'SendText' = '[Chat] Send Text',
  'SendKey' = '[Chat] Send Key'
}

export class SwitchVisibleChat implements Action {
  public readonly type = EChatActions.SwitchVisible;
}

export class SendTextChat implements Action {
  public readonly type = EChatActions.SendText;
  constructor(public payload: string) {}
}

export class SendKeyChat implements Action {
  public readonly type = EChatActions.SendKey;
  constructor(public payload: string) {}
}

export type ChatActions = SwitchVisibleChat | SendTextChat | SendKeyChat;
