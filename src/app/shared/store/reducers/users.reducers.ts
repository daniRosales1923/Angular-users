import * as fromUser from '../actions/users.actions';
import { User } from '../../../home/models/users.model';

export interface stateUser{
    loading: boolean;
    error: any;
    users: User [];
}

const InitialState: stateUser = {
    loading: false,
    error: null,
    users: [],
};

export function reducerUser(
    state: stateUser = InitialState, 
    action: fromUser.UserActionUnion
    ): stateUser {
    switch(action.type){
        case fromUser.UserActionTypes.Get_USER:{
            return {
                ...state,
                loading: true,
                error: null
            };
        }
        case fromUser.UserActionTypes.Get_SUCCESS_USER:{
            return{
                ...state,
                loading: true,
                users: action.payload,
                error: null
            };
        }
        case fromUser.UserActionTypes.Get_ERROR_USER:{
            return{
                ...state,
                loading: false,
                error:action.payload
            };
        }
        default: {
            return state;
        }
    }
}