import { Types } from "./types";
import { IRequestOrderDetailsPayload, IRequestOrderDetailsSuccessPayload, IRequestOrderDetailsFailurePayload, RequestOrderDetails, RequestOrderDetailsSuccess, RequestOrderDetailsFailure } from "./actions.interface";


export const fetchOrderDetailsRequestAction = (payload: IRequestOrderDetailsPayload): RequestOrderDetails => (
    {
        type: Types.REQUEST_ORDER_DETAILS,
        payload
    }
);

export const fetchOrderDetailsRequestSuccessAction = (payload: IRequestOrderDetailsSuccessPayload): RequestOrderDetailsSuccess => (
    {
        type: Types.REQUEST_ORDER_DETAILS_SUCCESS,
        payload
    }
);

export const fetchOrderDetailsRequestFailureAction = (payload: IRequestOrderDetailsFailurePayload): RequestOrderDetailsFailure => (
    {
        type: Types.REQUEST_ORDER_DETAILS_FAILURE,
        payload
    }
);