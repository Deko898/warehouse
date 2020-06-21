import {
  Route,
  Redirect,
  withRouter,
  RouteComponentProps,
} from "react-router-dom";
import React from "react";
import ComponentTabs from "../../../common/components/ComponentTabs";
import { orderPipelineRoutes } from "../routes/OrdersRoutes";
import { Grid, Card, CardContent } from "@material-ui/core";
import BarChart from "../../../charts/Bar";
import useOrderStyles from "./OrdersStyles";

const OrdersPipeline: React.FunctionComponent<RouteComponentProps> = ({
  match,
}) => {
  const classes = useOrderStyles();
  return (
    <div>
      <div className={classes.chartWrapper}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <BarChart />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <BarChart />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <BarChart />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <BarChart />
          </Grid>
        </Grid>
      </div>
      <Card>
        <CardContent className={classes.root}>
          <ComponentTabs routes={orderPipelineRoutes} />
          <Route path={match.path}>
            {<Redirect to={`${match.path}/inbox`} />}
          </Route>
          {orderPipelineRoutes.map((route: any) => (
            <Route
              path={`${match.path}${route.path}`}
              key={route.path}
              component={route.component}
            />
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default withRouter(OrdersPipeline);
