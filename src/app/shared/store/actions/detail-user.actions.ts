import {Action} from '@ngrx/store';
import { Post } from 'src/app/home/models/post.model';

export enum UserActionTypes {
    Get_All_DETAIL = '[detail user] Detail User All',
    Get_All_SUCCESS_DETAIL = '[detail user] Detail User Success',
    Get_All_ERROR_DETAIL = '[detail user] Detail User Error',
}

export class GetAllDetail implements Action{
    readonly type = UserActionTypes.Get_All_DETAIL
}

export class GetSuccessDetail implements Action{
    readonly type = UserActionTypes.Get_All_SUCCESS_DETAIL

    constructor(public payload:  Post[]){}
}

export class GetErrorDetail implements Action{
    readonly type = UserActionTypes.Get_All_ERROR_DETAIL

    constructor(public payload: any){}
}

export type UserActionUnion =
    GetAllDetail     |
    GetSuccessDetail | 
    GetErrorDetail ;