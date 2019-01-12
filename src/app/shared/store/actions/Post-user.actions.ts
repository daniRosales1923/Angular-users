import {Action} from '@ngrx/store';
import { Post } from 'src/app/home/models/post.model';

export enum UserActionTypes {
    Get_POST = '[post] Post User ',
    Get_POST_SUCCESS = '[post]  Post User Success',
    Get_POST_ERROR = '[post]  Post User Error',
}

export class GetPost implements Action{
    readonly type = UserActionTypes.Get_POST
    constructor(public id:any){};
}

export class GetPostSuccess implements Action{
    readonly type = UserActionTypes.Get_POST_SUCCESS

    constructor(public payload:  Post[]){}
}

export class GetPostError implements Action{
    readonly type = UserActionTypes.Get_POST_ERROR

    constructor(public payload: any){}
}

export type UserActionUnion =
    GetPost        |
    GetPostSuccess | 
    GetPostError ;