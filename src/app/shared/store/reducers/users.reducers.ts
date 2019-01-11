import * as fromUser from '../actions/users.actions';
import { User } from '../../../home/models/users.model';

export interface State{
    loading: boolean;
    error: any;
    users: User [];
}

const InitialState: State = {
    loading: false,
    error: null,
    users: [],
};

export function reducer(
    state: State = InitialState, 
    action: fromUser.UserActionUnion
    ): State {
    switch(action.type){
        case fromUser.UserActionTypes.Get_All_USER:{
            return {
                ...state,
                loading: true,
                error: null
            };
        }
        case fromUser.UserActionTypes.Get_All_SUCCESS_USER:{
            return{
                ...state,
                loading: true,
                users: action.payload,
                error: null
            };
        }
        case fromUser.UserActionTypes.Get_All_ERROR_USER:{
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