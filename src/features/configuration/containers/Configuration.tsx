import {
    Route,
    Redirect,
    RouteComponentProps,
    withRouter,
    Switch,
  } from "react-router-dom";
  import React from "react";
  import { configurationRoutes } from "../routes/ConfigurationRoutes";
  import useOrderStyles from "../../orders/containers/OrdersStyles";
  import AppTabs from "../../../common/components/AppBar/AppTabs";
  
  const Configure: React.FunctionComponent<RouteComponentProps> = ({ match }) => {
    const classes = useOrderStyles();
    return (
      <div className={classes.ordersPiplineContainer}>
        <AppTabs routes={configurationRoutes} />
        <Switch>
          <Route exact path={match.path}>
            {<Redirect to={`${match.path}/integrations`} />}
          </Route>
          {configurationRoutes.map((route: any) => (
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