import React from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { IOrder } from "../../../../models";
import { IAppState } from "../../../../store/app-state.interface";
import { fetchOrdersRequestAction } from "../../../../store/modules/orders/actions";
import { connect } from "react-redux";
import MatTable from "../../../../common/components/Table/Table";
import Loader from "../../../../common/components/Loader/Loader";

interface IProps {
  fetchOrders: Function;
  orders: IOrder[];
  isLoading: boolean;
  error?: any;
}

export const Inbox: React.FunctionComponent<IProps> = ({
  fetchOrders,
  orders,
  isLoading,
}) => {
  React.useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  const headCells = [
    {
      id: "systemId",
      numeric: false,
      disablePadding: false,
      label: "Sys",
    },
    {id: "icon", numeric: false, disablePadding: false, label: ""},
    { id: "orderNumber", numeric: true, disablePadding: false, label: "Order" },
    { id: "dc", numeric: true, disablePadding: false, label: "DC" },
    {
      id: "clientId",
      numeric: true,
      disablePadding: false,
      label: "Client ID",
    },
    { id: "retailer", numeric: true, disablePadding: false, label: "Retailer" },

    { id: "lines", numeric: true, disablePadding: false, label: "lines" },
    { id: "qty", numeric: true, disablePadding: false, label: "Qty" },
    { id: "weigth", numeric: true, disablePadding: false, label: "Weight" },
    {
      id: "shipMethod",
      numeric: true,
      disablePadding: false,
      label: "Ship Method",
    },
    {
      id: "completeBy",
      numeric: true,
      disablePadding: false,
      label: "Complete By",
    },
    { id: "status", numeric: false, disablePadding: false, label: "Status" },
    { id: "action", numeric: false, disablePadding: false, label: "Action" },
  ];

  const columns = [
    {
      id: "systemId",
      isLink: true,
      path: "/orders/details/",
    },
    {id: 'icon'},
    { id: "orderNumber" },
    { id: "dc" },
    {
      id: "clientId",
    },
    { id: "retailer" },

    { id: "lines" },
    { id: "qty" },
    { id: "weigth" },
    {
      id: "shipMethod",
    },
    {
      id: "completeBy",
    },
    { id: "status" },
    { id: "action" },
  ];
  return (
    <React.Fragment>
      {isLoading ? (
        <Loader />
      ) : (
        <PerfectScrollbar>
          <MatTable
            rows={orders}
            headCells={headCells}
            keyField="systemId"
            columns={columns}
          />
        </PerfectScrollbar>
      )}
    </React.Fragment>
  );
};

const mapStateToProps = ({ ordersState }: IAppState) => {
  return {
    orders: ordersState.orders,
    isLoading: ordersState.isLoading,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchOrders: () => dispatch(fetchOrdersRequestAction({ isLoading: true })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Inbox);
