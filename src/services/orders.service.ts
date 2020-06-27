import { MOCK_ORDERS } from '../mock/orders.mock';
import { IOrder } from '../models';

const fetchOrders = (): Promise<IOrder[]> => new Promise((res, rej) => setTimeout(() => res(MOCK_ORDERS), 300));

export const ordersService = {
    fetchOrders
}