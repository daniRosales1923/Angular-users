import { Injectable } from "@angular/core";
import { Action } from '@ngrx/store';
import {Actions, Effect, ofType} from '@ngrx/effects';
import { Observable, of } from "rxjs";
import { catchError, map, mergeMap} from 'rxjs/operators';
import * as fromUser from '../actions/users.actions';
import { UserService } from '../../services/users.service';

@Injectable()
export class UserEffects{

    @Effect()
    LoadingUser$: Observable<Action> = this.actions$.pipe(
        ofType(fromUser.UserActionTypes.Get_All_USER),
        mergeMap(action => this.userService.getUsers().pipe(
            map(users => new fromUser.GetSuccessUser(users)),
            catchError((error)=> of(new fromUser.GetErrorUser(error)))
        ))
    );

    constructor(
        private userService: UserService,
        private actions$: Actions
    ){}

}