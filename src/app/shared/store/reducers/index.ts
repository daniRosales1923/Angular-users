import { ActionReducerMap } from '@ngrx/store';
import * as fromUser from './users.reducers';
import * as fromPost from './post-user.reducers';

export interface AppState{
    user: fromUser.stateUser;
    post: fromPost.statePost;
}

export const reducers: ActionReducerMap<AppState> = {
    user: fromUser.reducerUser,
    post: fromPost.reducerPost,
};