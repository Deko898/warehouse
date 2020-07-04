import {
    Route,
    Redirect,
    withRouter,
    RouteComponentProps,
    Switch,
    useRouteMatch,
  } from "react-router-dom";
import React from "react";
import AppBreadcrumbs from "../../../common/components/BreadCrumbs/BreadCrumbs";
import {configureRoutes} from '../routes/ConfigureRoutes';
import ComponentTabs from "../../../common/components/ComponentTabs/ComponentTabs";
import { CardContent, Card } from "@material-ui/core";
import { orderPipelineRoutes } from "../../orders/routes/OrdersRoutes";
import useOrderStyles from "../../orders/containers/OrdersStyles"; 
  const ManageIntegration: React.FunctionComponent<RouteComponentProps> = ({
    match,
    location
  }) => {
    const classes = useOrderStyles();
    const {path, url} = useRouteMatch();
    let breadcrumbs = path
    return (
        <>
        <AppBreadcrumbs breadcrumbs={breadcrumbs} />
        <Card>
        <CardContent className={classes.root}>
          <ComponentTabs
            routes={orderPipelineRoutes}
            showExtraInfo={true}
            withDivider={false}
          />
          <Route exact path={match.path}>
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
        </>
    );
  };
  
  export default withRouter(ManageIntegration);