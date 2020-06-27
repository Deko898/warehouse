import { call, put, takeEvery } from 'redux-saga/effects';
import { Types } from './types';
import { orderDetailsService } from '../../../services/order-details.service';
import { RequestOrderDetails } from './actions.interface';
import { fetchOrderDetailsRequestSuccessAction, fetchOrderDetailsRequestFailureAction } from './actions';

export function* fetchOrderDetailsSaga({ payload }: RequestOrderDetails) {
    try {
        const orderDetails = yield call(orderDetailsService.fetchOrderDetails, payload.systemId);
        yield put(fetchOrderDetailsRequestSuccessAction({
            isLoading: false,
            orderDetails
        }))
    } catch (error) {
        yield put(fetchOrderDetailsRequestFailureAction({
            isLoading: false,
            error
        }));
    }
}

export const orderDetailsSagas = [
    takeEvery(Types.REQUEST_ORDER_DETAILS, fetchOrderDetailsSaga)
];