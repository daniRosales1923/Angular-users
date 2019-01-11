import { ActionReducerMap } from '@ngrx/store';
import * as fromUser from './users.reducers';
import * as fromDetail from './detail-user.reducers';

export interface AppState{
    user: fromUser.State;
    detail: fromDetail.State;
}

export const reducers: ActionReducerMap<AppState> = {
    user: fromUser.reducer,
    detail: fromDetail.reducer,
};