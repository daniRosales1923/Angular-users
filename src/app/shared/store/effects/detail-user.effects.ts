import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { mergeMap, map, catchError } from 'rxjs/operators';
import * as fromPost from '../actions/detail-user.actions';
import { UserService } from '../../services/users.service';
import { PostsService } from '../../services/post.service';

@Injectable()
export class DetailEffects{
    @Effect()
    LoadingUser$: Observable<Action> = this.actions$.pipe(
        ofType(fromPost.UserActionTypes.Get_All_DETAIL),
        mergeMap(action => this.detailService.getByIdUser(1).pipe(
            map(detail => new fromPost.GetSuccessDetail(detail)),
            catchError((error)=> of(new fromPost.GetErrorDetail(error)))
        ))
    );

    constructor(
        private detailService: PostsService,
        private actions$: Actions
    ){}
}