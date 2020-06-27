import { RequestOrders, IRequestOrdersPayload, IRequestOrdersSuccessPayload, RequestOrdersFailure, IRequestOrdersFailurePayload } from "./actions.interface";
import { RequestOrdersSuccess } from "./actions.interface";
import { Types } from "./types";


export const fetchOrdersRequestAction = (payload: IRequestOrdersPayload): RequestOrders => (
    {
        type: Types.REQUEST_ORDERS,
        payload
    }
);

export const fetchOrdersRequestSuccessAction = (payload: IRequestOrdersSuccessPayload): RequestOrdersSuccess => (
    {
        type: Types.REQUEST_ORDERS_SUCCESS,
        payload
    }
);

export const fetchOrdersRequestFailureAction = (payload: IRequestOrdersFailurePayload): RequestOrdersFailure => (
    {
        type: Types.REQUEST_ORDERS_FAILURE,
        payload
    }
);