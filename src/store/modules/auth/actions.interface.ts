import { Types } from "./types";
import { IUser, ILoginDto } from "../../../models";

export interface IRequestLoginPayload {
    isLoading: boolean;
    loginDto: ILoginDto;
    callback: Function
}

export interface IRequestLoginSuccessPayload {
    isLoading: boolean;
    error: any;
    user: IUser;
}

export interface IRequestLoginFailurePayload {
    isLoading: boolean;
    error: any;
}

export interface RequestLogin {
    type: Types.REQUEST_LOGIN;
    payload: IRequestLoginPayload
}

export interface RequestLoginSuccess {
    type: Types.REQUEST_LOGIN_SUCCESS;
    payload: IRequestLoginSuccessPayload;
}

export interface RequestLoginFailure {
    type: Types.REQUEST_LOGIN_FAILURE;
    payload: IRequestLoginFailurePayload
}


export type Actions = RequestLogin
    | RequestLoginSuccess
    | RequestLoginFailure;