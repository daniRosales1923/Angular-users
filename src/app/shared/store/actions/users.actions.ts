import {Action} from '@ngrx/store';
import { User } from '../../../home/models/users.model';

export enum UserActionTypes {
    Get_All_USER = '[users] User All',
    Get_All_SUCCESS_USER = '[users] User Success',
    Get_All_ERROR_USER = '[users] User Error',
}

export class GetAllUser implements Action{
    readonly type = UserActionTypes.Get_All_USER
}

export class GetSuccessUser implements Action{
    readonly type = UserActionTypes.Get_All_SUCCESS_USER

    constructor(public payload:  User[]){}
}

export class GetErrorUser implements Action{
    readonly type = UserActionTypes.Get_All_ERROR_USER

    constructor(public payload: any){}
}

export type UserActionUnion =
    GetAllUser      |
    GetSuccessUser | 
    GetErrorUser ;