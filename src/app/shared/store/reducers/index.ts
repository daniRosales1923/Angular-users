import * as fromUser from './users.reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState{
    user: fromUser.State
}

export const reducers: ActionReducerMap<AppState> = {
    user: fromUser.reducer
};