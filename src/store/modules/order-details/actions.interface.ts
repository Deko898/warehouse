import { Types } from "./types";
import { IOrderDetails } from "../../../models";

export interface IRequestOrderDetailsPayload {
    isLoading: boolean;
    systemId: string;
}

export interface IRequestOrderDetailsSuccessPayload {
    isLoading: boolean;
    orderDetails: IOrderDetails;
}

export interface IRequestOrderDetailsFailurePayload {
    isLoading: boolean;
    error: any;
}

export interface RequestOrderDetails {
    type: Types.REQUEST_ORDER_DETAILS;
    payload: IRequestOrderDetailsPayload
}

export interface RequestOrderDetailsSuccess {
    type: Types.REQUEST_ORDER_DETAILS_SUCCESS;
    payload: IRequestOrderDetailsSuccessPayload;
}

export interface RequestOrderDetailsFailure {
    type: Types.REQUEST_ORDER_DETAILS_FAILURE;
    payload: IRequestOrderDetailsFailurePayload
}


export type Actions = RequestOrderDetails
    | RequestOrderDetailsSuccess
    | RequestOrderDetailsFailure;