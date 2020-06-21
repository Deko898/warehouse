import {
  Route,
  Redirect,
  withRouter,
  RouteComponentProps,
} from "react-router-dom";
import React from "react";
import ComponentTabs from "../../../common/components/ComponentTabs";
import { orderCreateRoutes } from "../routes/OrdersRoutes";

const CreateOrder: React.FunctionComponent<RouteComponentProps> = ({
  match,
}) => {
  return (
    <div>
      <ComponentTabs routes={orderCreateRoutes} />
      <Route path={match.path}>{<Redirect to={`${match.path}/upload`} />}</Route>
      {orderCreateRoutes.map((route: any) => (
        <Route
          path={`${match.path}${route.path}`}
          key={route.path}
          component={route.component}
        />
      ))}
    </div>
  );
};

export default withRouter(CreateOrder);
