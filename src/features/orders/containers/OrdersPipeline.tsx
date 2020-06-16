import {
  Route,
  Redirect,
  withRouter,
  RouteComponentProps,
} from "react-router-dom";
import React from "react";
import ComponentTabs from "../../../common/components/ComponentTabs";
import { orderPipelineRoutes } from "../routes/OrdersRoutes";

const OrdersPipeline: React.FunctionComponent<RouteComponentProps> = ({
  match,
}) => {
  return (
    <div>
      <ComponentTabs routes={orderPipelineRoutes} />
      <Route path={match.path}>{<Redirect to={`${match.path}/inbox`} />}</Route>
      {orderPipelineRoutes.map((route: any) => (
        <Route
          path={`${match.path}${route.path}`}
          key={route.path}
          component={route.component}
        />
      ))}
    </div>
  );
};

export default withRouter(OrdersPipeline);
