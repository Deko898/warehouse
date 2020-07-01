import {
  Route,
  Redirect,
  withRouter,
  RouteComponentProps,
  Switch,
} from "react-router-dom";
import React from "react";
import OrdersPipeline from "./OrdersPipeline";
import CreateOrder from "./CreateOrder";
import OrderLookup from "./OrderLookup/OrderLookup";

const ManageOrders: React.FunctionComponent<RouteComponentProps> = ({
  match,
}) => {
  return (
    <Switch>
      <Route exact path={match.path}>
        {<Redirect to={`${match.url}/order-pipeline`} />}
      </Route>
      <Route path={`${match.url}/order-pipeline`} component={OrdersPipeline} />
      <Route path={`${match.url}/create-order`} component={CreateOrder} />
      <Route path={`${match.url}/order-lookup`} component={OrderLookup} />
    </Switch>
  );
};

export default withRouter(ManageOrders);
