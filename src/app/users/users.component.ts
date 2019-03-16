import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../store/state/app.state';
import { GetUsers } from '../store/actions/user.action';
import { selectUserList } from '../store/selectors/user.selector';
import { IUser } from '../model/user.model';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users$ = this._store.pipe(select(selectUserList));

  constructor(private _store: Store<IAppState>, private router: Router) {}

  seleziona(user: IUser) {
    this.router.navigate(['user', user.id]);
  }

  ngOnInit() {
    this._store.dispatch(new GetUsers());
  }
}
