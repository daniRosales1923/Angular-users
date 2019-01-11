import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/users.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/shared/store/reducers';
import { getUsers } from 'src/app/shared/store/selectors/users.selectors';
import * as fromActions from '../../../shared/store/actions/users.actions';
@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users$: Observable<User[]>;
  
  constructor(private store: Store<AppState>) { 
    this.users$ = this.store.select(getUsers);

  }

  ngOnInit() {    
    this.store.dispatch( new fromActions.GetAllUser );
  }
}
