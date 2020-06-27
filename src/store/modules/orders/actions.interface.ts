import { Types } from "./types";
import { IOrder } from "../../../models";

export interface IRequestOrdersPayload {
    isLoading: boolean;
}

export interface IRequestOrdersSuccessPayload extends IRequestOrdersPayload {
    orders: IOrder[];
}

export interface IRequestOrdersFailurePayload extends IRequestOrdersPayload {
    error: any;
}

export interface RequestOrders {
    type: Types.REQUEST_ORDERS;
    payload: IRequestOrdersPayload
}

export interface RequestOrdersSuccess {
    type: Types.REQUEST_ORDERS_SUCCESS;
    payload: IRequestOrdersSuccessPayload;
}

export interface RequestOrdersFailure {
    type: Types.REQUEST_ORDERS_FAILURE;
    payload: IRequestOrdersFailurePayload
}


export type Actions = RequestOrders
    | RequestOrdersSuccess
    | RequestOrdersFailure;