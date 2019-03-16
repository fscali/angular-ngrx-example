import { IUser } from '../../model/user.model';

import { Action } from '@ngrx/store';

export enum EUserActions {
  'GetUser' = '[User] Get User',
  'GetUserSuccess' = '[User] Get User Success',
  'GetUsers' = '[User] Get Users',
  'GetUsersSuccess' = '[User] Get Users Success'
}

export class GetUsers implements Action {
  public readonly type = EUserActions.GetUsers;
}

export class GetUser implements Action {
  public readonly type = EUserActions.GetUser;
  constructor(public payload: number) {}
}

export class GetUsersSuccess implements Action {
  public readonly type = EUserActions.GetUsersSuccess;
  constructor(public payload: IUser[]) {}
}

export class GetUserSuccess implements Action {
  public readonly type = EUserActions.GetUserSuccess;
  constructor(public payload: IUser) {}
}

export type UserActions = GetUser | GetUsers | GetUserSuccess | GetUsersSuccess;
