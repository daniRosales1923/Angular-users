import { AppState } from "../reducers";
import { createSelector } from '@ngrx/store';

const getDetailState = (state: AppState) => state.detail;

export const isLoading = createSelector(
    getDetailState,
    state => state.loading
);

export const getDetail = createSelector(
    getDetailState,
    state => state.post
    
);


export const getDetailId = (id) => createSelector(
    getDetailState,
    state => state.post.filter(post=>{
        return post.userId= id;
    })
);