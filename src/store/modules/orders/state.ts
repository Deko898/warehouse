import { IOrder } from "../../../models";

export interface IOrderState {
    isLoading: boolean;
    orders: IOrder[];
    selectedOrder: IOrder | null;
    error?: any;
}


export const initialState: IOrderState = {
    isLoading: false,
    orders: [],
    selectedOrder: null,
    error: null,
}