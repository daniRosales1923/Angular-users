import * as fromPost from '../actions/Post-user.actions';
import { Post } from 'src/app/home/models/post.model';

export interface statePost{
    loading: boolean;
    error: any;
    post: Post [];
}

const InitialState: statePost = {
    loading: false,
    error: null,
    post: [],
};

export function reducerPost(
    state: statePost = InitialState, 
    action: fromPost.UserActionUnion
    ): statePost {
    switch(action.type){
        case fromPost.UserActionTypes.Get_POST:{
            return {
                ...state,
                loading: true,
                error: null
            };
        }
        case fromPost.UserActionTypes.Get_POST_SUCCESS:{
            return{
                ...state,
                loading: true,
                post: action.payload,
                error: null
            };
        }
        case fromPost.UserActionTypes.Get_POST_ERROR:{
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