import { AppState } from "../reducers";
import { createSelector, createFeatureSelector} from '@ngrx/store';

const getDetailState = (state: AppState) => state.post;
// const getDetailState1 = createFeatureSelector<AppState, State >('detail');

export const isLoading = createSelector(
    getDetailState,
    state => state.loading
);

export const getDetail = createSelector(
    getDetailState,
    state => state.post
    
);

export const getDetailUserId = (id) => createSelector(
    getDetailState,
    state =>  state.post.filter(data=>{
        return data.userId=id;
    })
);