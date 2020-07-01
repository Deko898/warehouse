import { Types } from "./types";
import { IRequestLoginPayload, RequestLogin, IRequestLoginSuccessPayload, RequestLoginSuccess, IRequestLoginFailurePayload, RequestLoginFailure, RequestLogout, IRequestLogoutSuccessPayload, RequestLogoutSuccess, IRequestLogoutPayload, IRequestLogoutFailurePayload, RequestLogoutFailure } from "./actions.interface";

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

export const requestLogoutAction = (payload: IRequestLogoutPayload): RequestLogout => (
    {
        type: Types.REQUEST_LOGOUT,
        payload
    }
);

export const requestLogoutSuccessAction = (payload: IRequestLogoutSuccessPayload): RequestLogoutSuccess => (
    {
        type: Types.REQUEST_LOGOUT_SUCCESS,
        payload
    }
);

export const requestLogoutFailureAction = (payload: IRequestLogoutFailurePayload): RequestLogoutFailure => (
    {
        type: Types.REQUEST_LOGOUT_FAILURE,
        payload
    }
);