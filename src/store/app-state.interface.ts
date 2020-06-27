import { IOrderState } from "./modules/orders/state";
import { IOrderDetailsState } from './modules/order-details/state';

export interface IAppState {
    ordersState: IOrderState;
    orderDetailsState: IOrderDetailsState;
}