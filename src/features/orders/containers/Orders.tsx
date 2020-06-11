import {
  Route,
  Redirect,
  RouteComponentProps,
  withRouter,
} from "react-router-dom";
import React from "react";
import AppTabs from "../../../common/components/Tabs";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import routes from "../routes/OrdersRoutes";
import useOrderStyles from "./OrdersStyles";
import AppBreadcrumbs from "../../../common/components/BreadCrumbs";

const Orders: React.FunctionComponent<RouteComponentProps> = ({ match }) => {
  const breadcrumbs = "/Orders/Manage Orders/Orders Pipeline";
  const classes = useOrderStyles();
  return (
    <div className={classes.ordersPiplineContainer}>
      <div className={classes.breadCrumbsAndInputsContainer}>
        <AppBreadcrumbs breadcrumbs={breadcrumbs} />
        <div>
          <Button variant="contained" color="primary">
            Create
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.exportBtn}
          >
            Export
          </Button>
          <TextField
            label="Search"
            color="secondary"
            variant="outlined"
            size="small"
          />
        </div>
      </div>
      <Card>
        <CardContent className={classes.root}>
          <AppTabs routes={routes} />
          <div className={classes.boxSeparator}></div>
          <Route path={match.path}>
            {<Redirect to={`${match.path}/inbox`} />}
          </Route>
          {routes.map((route: any) => (
            <Route
              path={`${match.path}${route.link}`}
              key={route.link}
              component={route.component}
            />
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default withRouter(Orders);
