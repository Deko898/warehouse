import { IOrderDetails } from "../../../models";

export interface IOrderDetailsState {
    isLoading: boolean;
    orderDetails: IOrderDetails;
    error: any;
}


export const initialState: IOrderDetailsState = {
    isLoading: true,
    orderDetails: {} as IOrderDetails,
    error: null
}