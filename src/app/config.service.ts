import { Injectable } from '@angular/core';
import { IConfig } from './model/config.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private _config: IConfig = {
    adminName: 'fscali',
    permissions: []
  };

  getConfig(): Observable<IConfig> {
    return of(this._config);
  }

  constructor() {}
}
