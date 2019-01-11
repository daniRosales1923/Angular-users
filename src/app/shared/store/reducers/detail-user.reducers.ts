import * as fromDetail from '../actions/detail-user.actions';
import { Post } from 'src/app/home/models/post.model';

export interface State{
    loading: boolean;
    error: any;
    post: Post [];
}

const InitialState: State = {
    loading: false,
    error: null,
    post: [],
};

export function reducer(
    state: State = InitialState, 
    action: fromDetail.UserActionUnion
    ): State {
    switch(action.type){
        case fromDetail.UserActionTypes.Get_All_DETAIL:{
            return {
                ...state,
                loading: true,
                error: null
            };
        }
        case fromDetail.UserActionTypes.Get_All_SUCCESS_DETAIL:{
            return{
                ...state,
                loading: true,
                post: action.payload,
                error: null
            };
        }
        case fromDetail.UserActionTypes.Get_All_ERROR_DETAIL:{
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