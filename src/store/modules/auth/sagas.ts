import { call, put, takeEvery } from 'redux-saga/effects';
import { Types } from './types';
import { requestLoginFailureAction, requestLoginSuccessAction, requestLogoutSuccessAction } from './actions';
import { RequestLogin, RequestLogout } from './actions.interface';
import { authService } from '../../../services/auth.service';

export function* requestLoginSaga({ payload }: RequestLogin) {
    try {
        const user = yield call(authService.login, payload.loginDto);
        yield put(requestLoginSuccessAction({
            isLoading: false,
            error: null,
            user
        }));

        localStorage.setItem('3linxUser', JSON.stringify(user));
        payload.callback();
    } catch (error) {
        yield put(requestLoginFailureAction({
            isLoading: false,
            error
        }));
    }
}

export function* requestLogoutSaga({ payload }: RequestLogout) {
    try {
        yield call(authService.logout);
        yield put(requestLogoutSuccessAction({
            user: null
        }));

        localStorage.removeItem('3linxUser');
        payload.callback();
    } catch (error) {
        yield put(requestLoginFailureAction(error));
    }
}

export const authSagas = [
    takeEvery(Types.REQUEST_LOGIN, requestLoginSaga),
    takeEvery(Types.REQUEST_LOGOUT, requestLogoutSaga),
];