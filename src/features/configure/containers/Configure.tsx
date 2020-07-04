import {
    Route,
    Redirect,
    RouteComponentProps,
    withRouter,
    Switch,
  } from "react-router-dom";
  import React from "react";
  import { configureRoutes } from "../routes/ConfigureRoutes";
  import useOrderStyles from "../../orders/containers/OrdersStyles";
  import AppTabs from "../../../common/components/AppBar/AppTabs";
  
  const Configure: React.FunctionComponent<RouteComponentProps> = ({ match }) => {
    const classes = useOrderStyles();
    return (
      <div className={classes.ordersPiplineContainer}>
        <AppTabs routes={configureRoutes} />
        <Switch>
          <Route exact path={match.path}>
            {<Redirect to={`${match.path}/integrations`} />}
          </Route>
          {configureRoutes.map((route: any) => (
            <Route
              path={`${match.path}${route.path}`}
              key={route.path}
              component={route.component}
            />
          ))}
        </Switch>
      </div>
    );
  };
  
  export default withRouter(Configure);