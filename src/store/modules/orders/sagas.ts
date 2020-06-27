import { call, put, takeEvery } from 'redux-saga/effects';
import { ordersService } from '../../../services/orders.service';
import { fetchOrdersRequestSuccessAction, fetchOrdersRequestFailureAction } from './actions';
import { Types } from './types';


export function* getOrdersSaga(): any {
    try {
        const orders = yield call(ordersService.fetchOrders);
        yield put(fetchOrdersRequestSuccessAction({
            isLoading: false,
            orders
        }))
    } catch (error) {
        yield put(fetchOrdersRequestFailureAction({
            isLoading: false,
            error
        }));
    }
}

export const ordersSagas = [
    takeEvery(Types.REQUEST_ORDERS, getOrdersSaga)
];