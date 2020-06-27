import { IOrder } from ".";

export interface IOrderDetails {
    orderSummary: IOrder;
    shipTo: any;
    billTo: any;
    attachments: any[];
    references: any[];
    orderLocationCoordinates: any[];
    orderPath: [number, number][];
    shippingDetail: any;
    details: any;
}