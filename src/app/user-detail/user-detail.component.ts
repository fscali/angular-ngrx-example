import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { GetUser } from '../store/actions/user.action';
import { IAppState } from '../store/state/app.state';
import { selectSelectedUser } from '../store/selectors/user.selector';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  user$ = this.store.pipe(select(selectSelectedUser));

  constructor(private route: ActivatedRoute, private store: Store<IAppState>) {}

  ngOnInit() {
    this.route.paramMap.subscribe(para => {
      const id = Number(para.get('id'));
      this.store.dispatch(new GetUser(id));
    });
  }
}
