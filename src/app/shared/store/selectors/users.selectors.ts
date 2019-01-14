import { createSelector } from "@ngrx/store";
import { AppState } from "../reducers";
import { User } from 'src/app/home/models/users.model';

const getUserState = (state: AppState) => state.user;

export const isLoading = createSelector(
  getUserState,
  state => state.loading 
);

export const getUsers = createSelector(
  getUserState,
  state => state.users
);

export const getUserById  = createSelector(
  getUserState,
  (state, props) => state.users.find(user=> user.id==props.id)
);