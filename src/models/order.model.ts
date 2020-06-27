export interface IOrder {
    systemId: string;
    orderNumber: string;
    dc: string;
    clientId: string;
    retailer: string;
    lines: number;
    qty: number;
    weigth: number;
    shipMethod: string;
    completeBy: string;
    status: string;
}