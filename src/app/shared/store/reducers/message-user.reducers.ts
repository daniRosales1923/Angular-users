import * as fromMessage from '../actions/Message-user.actions';
import { Message } from 'src/app/home/models/message.model';

export interface stateMessage{
    loading: boolean;
    error: any;
    message: Message [];
}

const InitialState: stateMessage = {
    loading: false,
    error: null,
    message: [],
};

export function reducerMessage (
    state: stateMessage = InitialState,
    action: fromMessage.UserActionUnion
    ): stateMessage {
    switch(action.type){
        case fromMessage.MessageActionTypes.GET_MESSAGE:{
            return{
                ...state,
                loading: true,
                error: null
            };
        }
        case fromMessage.MessageActionTypes.GET_MESSAGE_SUCCESS:{
            return{
                ...state,
                loading: true,
                message: action.payload,
                error: null
            };
        }
        case fromMessage.MessageActionTypes.GET_MESSAGE_ERROR:{
            return{
                ...state,
                loading: false,
                error: action.payload
            };
        }
        default: {
            return state;
        }
    }
}
