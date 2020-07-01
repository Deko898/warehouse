import { Types } from "./types";
import { IRequestLoginPayload, RequestLogin, IRequestLoginSuccessPayload, RequestLoginSuccess, IRequestLoginFailurePayload, RequestLoginFailure } from "./actions.interface";

export const requestLoginAction = (payload: IRequestLoginPayload): RequestLogin => (
    {
        type: Types.REQUEST_LOGIN,
        payload
    }
);

export const requestLoginSuccessAction = (payload: IRequestLoginSuccessPayload): RequestLoginSuccess => (
    {
        type: Types.REQUEST_LOGIN_SUCCESS,
        payload
    }
);

export const requestLoginFailureAction = (payload: IRequestLoginFailurePayload): RequestLoginFailure => (
    {
        type: Types.REQUEST_LOGIN_FAILURE,
        payload
    }
);