import { IOrderState } from "./modules/orders/state";
import { IOrderDetailsState } from './modules/order-details/state';
import { IAuthState } from './modules/auth/state';

export interface IAppState {
    ordersState: IOrderState;
    orderDetailsState: IOrderDetailsState;
    authState: IAuthState;
}