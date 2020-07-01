import {
  Route,
  Redirect,
  RouteComponentProps,
  withRouter,
  Switch,
} from "react-router-dom";
import React from "react";
import { ordersRoutes } from "../routes/OrdersRoutes";
import useOrderStyles from "./OrdersStyles";
import AppTabs from "../../../common/components/AppBar/AppTabs";
import OrderDetails from "./OrderDetails/OrderDetails";

const Orders: React.FunctionComponent<RouteComponentProps> = ({ match }) => {
  const classes = useOrderStyles();
  return (
    <div className={classes.ordersPiplineContainer}>
      <AppTabs routes={ordersRoutes} />
      <Switch>
        <Route exact path={match.path}>
          {<Redirect to={`${match.path}/manage-orders`} />}
        </Route>
        {ordersRoutes.map((route: any) => (
          <Route
            path={`${match.path}${route.path}`}
            key={route.path}
            component={route.component}
          />
        ))}
        <Route path={"/orders/details/:orderId"} component={OrderDetails} />
      </Switch>
    </div>
  );
};

export default withRouter(Orders);