import {Action} from '@ngrx/store';
import { Message } from 'src/app/home/models/message.model';

export enum MessageActionTypes {
    GET_MESSAGE = '[message] Message User',
    GET_MESSAGE_SUCCESS = '[message] Message User Success',
    GET_MESSAGE_ERROR = '[message] Message User Error'
}

export class GetMessage implements Action{
    readonly type = MessageActionTypes.GET_MESSAGE
    constructor(public id:any){};
}

export class GetMessageSuccess implements Action{
    readonly type = MessageActionTypes.GET_MESSAGE_SUCCESS

    constructor(public payload:  Message[]){}
}

export class GetMessageError implements Action{
    readonly type = MessageActionTypes.GET_MESSAGE_ERROR

    constructor(public payload: any){}
}

export type UserActionUnion =
    GetMessage        |
    GetMessageSuccess | 
    GetMessageError ;