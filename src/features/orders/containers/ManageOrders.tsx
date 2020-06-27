import {
  Route,
  Redirect,
  withRouter,
  RouteComponentProps,
} from "react-router-dom";
import React from "react";
import OrdersPipeline from "./OrdersPipeline";
import CreateOrder from "./CreateOrder";
import OrderLookup from "./OrderLookup/OrderLookup";

const ManageOrders: React.FunctionComponent<RouteComponentProps> = ({
  match,
}) => {
  return (
    <div>
      <Route path="/">
        {<Redirect to={`${match.url}/order-pipeline`} />}
      </Route>
      <Route
        path={`${match.url}/order-pipeline`}
        component={OrdersPipeline}
      />
      <Route path={`${match.url}/create-order`} component={CreateOrder} />
      <Route path={`${match.url}/order-lookup`} component={OrderLookup} />
    </div>
  );
};

export default withRouter(ManageOrders);
