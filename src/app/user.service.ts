import { Injectable } from '@angular/core';
import { IUser } from './model/user.model';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _theUsers: IUser[] = [
    {
      id: 0,
      cardNumber: 'card 1',
      cardType: 'visa',
      name: 'francesco'
    },
    {
      id: 1,
      cardNumber: 'card 1',
      cardType: 'visa 1',
      name: 'francesco 1'
    },
    {
      id: 2,
      cardNumber: 'card 2',
      cardType: 'visa 2',
      name: 'francesco 2'
    },
    {
      id: 3,
      cardNumber: 'card 3',
      cardType: 'visa 3',
      name: 'francesco 3'
    },
    {
      id: 4,
      cardNumber: 'card 4',
      cardType: 'visa 4',
      name: 'francesco 4'
    },
    {
      id: 5,
      cardNumber: 'card 5',
      cardType: 'visa 5',
      name: 'francesco 5'
    }
  ];

  public getUsers(): Observable<IUser[]> {
    return of(this._theUsers);
  }
  constructor() {}
}
