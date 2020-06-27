// import axios from 'axios';
import { IOrderDetails } from '../models';
import { ORDER_DETAILS_MOCK } from '../mock/order-details.mock';

const fetchOrderDetails = (systemId: string): Promise<IOrderDetails> => new Promise((res, rej) => setTimeout(() => res(ORDER_DETAILS_MOCK[systemId]), 2000));

export const orderDetailsService = {
    fetchOrderDetails
}