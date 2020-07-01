import { call, put, takeEvery } from 'redux-saga/effects';
import { Types } from './types';
import { requestLoginFailureAction, requestLoginSuccessAction } from './actions';
import { RequestLogin } from './actions.interface';
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

export const authSagas = [
    takeEvery(Types.REQUEST_LOGIN, requestLoginSaga)
];