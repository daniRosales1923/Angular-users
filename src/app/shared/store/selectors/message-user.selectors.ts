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