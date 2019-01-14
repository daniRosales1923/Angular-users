import { ActionReducerMap } from '@ngrx/store';
import * as fromUser from './users.reducers';
import * as fromPost from './post-user.reducers';
import * as fromMessage from './message-user.reducers';

export interface AppState{
    user: fromUser.stateUser;
    post: fromPost.statePost;
    message: fromMessage.stateMessage
}

export const reducers: ActionReducerMap<AppState> = {
    user: fromUser.reducerUser,
    post: fromPost.reducerPost,
    message: fromMessage.reducerMessage
};