import {Action} from '@ngrx/store';
import { User } from '../../../home/models/users.model';

export enum UserActionTypes {
    Get_USER = '[users] User All',
    Get_SUCCESS_USER = '[users] User Success',
    Get_ERROR_USER = '[users] User Error',
}

export class GetUser implements Action{
    readonly type = UserActionTypes.Get_USER
}

export class GetSuccessUser implements Action{
    readonly type = UserActionTypes.Get_SUCCESS_USER

    constructor(public payload:  User[]){}
}

export class GetErrorUser implements Action{
    readonly type = UserActionTypes.Get_ERROR_USER

    constructor(public payload: any){}
}

export type UserActionUnion =
    GetUser      |
    GetSuccessUser | 
    GetErrorUser ;