import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { mergeMap, map, catchError } from 'rxjs/operators';
import * as fromPost from '../actions/Post-user.actions';
import { PostService } from '../../services/post.service';

@Injectable()
export class PostEffects{
    @Effect()
    LoadingUsers$: Observable<Action> = this.actions.pipe(
        ofType(fromPost.UserActionTypes.Get_POST),
        mergeMap(action => this.detailService.getDetail().pipe(
            map(detail => new fromPost.GetPostSuccess(detail)),
            catchError((error)=> of(new fromPost.GetPostError(error)))
        ))
    );

    // @Effect()
    // LoadingUser$: Observable<Action> = this.actions$.pipe(
    //     ofType(fromPost.UserActionTypes.Get_All_DETAIL),
    //     mergeMap((action:fromPost.GetAllDetail) => this.detailService.getByIdUser(action.id).pipe(
    //         map(detail => new fromPost.GetSuccessDetail(detail)),
    //         catchError((error)=> of(new fromPost.GetErrorDetail(error)))
    //     ))
    // );

    @Effect() 
    loadPost$ = this.actions.pipe(
        ofType(fromPost.UserActionTypes.Get_POST),
        map((action: fromPost.GetPost) => action.id),
        mergeMap(id => this.detailService.getByIdUser(id).pipe(
            map(response => new fromPost.GetPostSuccess(response)),
            catchError(error => of(new fromPost.GetPostError(error)))
        ))
    );

    constructor(
        private detailService: PostService,
        private actions: Actions
    ){}
}