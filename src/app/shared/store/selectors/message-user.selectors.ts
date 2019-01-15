import { AppState } from "../reducers";
import { createSelector } from '@ngrx/store';

const getMessageState = (state: AppState) => state.message;

export const isLoading = createSelector(
    getMessageState,
    state => state.loading
);

export const getMessage = createSelector(
    getMessageState,
    state => state.message
);

export const getMessageById = (id) => createSelector(
    getMessageState,
    state =>  state.message.filter(data=>{
        return data.postId==id;
    })
);