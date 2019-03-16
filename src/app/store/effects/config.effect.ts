import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/config.service';
import { Effect, Actions, ofType } from '@ngrx/effects';
import {
  GetConfig,
  EConfigActions,
  GetConfigSuccess
} from '../actions/config.action';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class ConfigEffect {
  @Effect()
  getConfig$ = this._actions.pipe(
    ofType<GetConfig>(EConfigActions.GetConfig),
    switchMap(() => this._configService.getConfig()),
    switchMap(config => of(new GetConfigSuccess(config)))
  );
  constructor(
    private _configService: ConfigService,
    private _actions: Actions
  ) {}
}
