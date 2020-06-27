import {
  Route,
  Redirect,
  withRouter,
  RouteComponentProps,
} from "react-router-dom";
import React from "react";
import ComponentTabs from "../../../common/components/ComponentTabs/ComponentTabs";
import { orderCreateRoutes } from "../routes/OrdersRoutes";
import { Card, CardContent } from "@material-ui/core";
import useOrderStyles from "./OrdersStyles";

const CreateOrder: React.FunctionComponent<RouteComponentProps> = ({
  match,
}) => {
  const classes = useOrderStyles();

  return (
    <Card>
      <CardContent className={classes.root}>
        <ComponentTabs routes={orderCreateRoutes} showExtraInfo={false} withDivider={true}/>
        <Route path={match.path}>
          {<Redirect to={`${match.path}/upload`} />}
        </Route>
        {orderCreateRoutes.map((route: any) => (
          <Route
            path={`${match.path}${route.path}`}
            key={route.path}
            component={route.component}
          />
        ))}
      </CardContent>
    </Card>
  );
};

export default withRouter(CreateOrder);
