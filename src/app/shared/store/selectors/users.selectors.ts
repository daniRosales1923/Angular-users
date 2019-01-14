import { createSelector } from "@ngrx/store";
import { AppState } from "../reducers";

const getUserState = (state: AppState) => state.user;

export const isLoading = createSelector(
  getUserState,
  state => state.loading
);

export const getUsers = createSelector(
  getUserState,
  state => state.users
);

export const getUserById  = (id) => createSelector(
  getUserState,
    state=> state[id]
  );