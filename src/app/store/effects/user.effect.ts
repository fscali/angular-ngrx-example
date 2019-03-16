import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { UserService } from 'src/app/user.service';
import {
  EUserActions,
  GetUser,
  GetUserSuccess,
  GetUsers,
  GetUsersSuccess
} from '../actions/user.action';

import { map, withLatestFrom, switchMap } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { of } from 'rxjs';
import { selectUserList } from '../selectors/user.selector';

@Injectable()
export class UserEffect {
  @Effect()
  getUser$ = this._actions$.pipe(
    ofType<GetUser>(EUserActions.GetUser),
    map(action => action.payload),
    withLatestFrom(this._store.pipe(select(selectUserList))),
    switchMap(([id, users]) => {
      const selectedUser = users.filter(user => {
        return user.id === +id;
      })[0];
      return of(new GetUserSuccess(selectedUser));
    })
  );

  @Effect()
  getUsers$ = this._actions$.pipe(
    ofType<GetUsers>(EUserActions.GetUsers),
    switchMap(() => {
      return this._userService.getUsers();
    }),
    switchMap(users => of(new GetUsersSuccess(users)))
  );

  constructor(
    private _userService: UserService,
    private _actions$: Actions,
    private _store: Store<IAppState>
  ) {}
}
