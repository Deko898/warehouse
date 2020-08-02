import {
  Route,
  Redirect,
  withRouter,
  RouteComponentProps,
  useRouteMatch,
} from "react-router-dom";
import React from "react";
import AppBreadcrumbs from "../../../common/components/BreadCrumbs/BreadCrumbs";
import { availableIntegrations } from "../routes/ConfigurationRoutes";
import ComponentTabs from "../../../common/components/ComponentTabs/ComponentTabs";
import { CardContent, Card, Grid } from "@material-ui/core";
import useOrderStyles from "../../orders/containers/OrdersStyles";
import Avatar from "@material-ui/core/Avatar";
import CardHeader from "@material-ui/core/CardHeader";
import FavoriteIcon from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import CardWithImage from "../components/Card/Card";

const ManageIntegration: React.FunctionComponent<RouteComponentProps> = ({
  match,
}) => {
  const classes = useOrderStyles();
  const { path } = useRouteMatch();
  return (
    <>
      <AppBreadcrumbs breadcrumbs={path} />
      <h2 className={classes.titleAvaliable}>Active Connectors (2)</h2>

      <Grid container spacing={2}>
        <Grid item md={2}>
          <CardWithImage isComingSoon={false}>
            {{
              actions: (
                <>
                  <Button size="small" color="primary" variant="outlined">
                    Settings
                  </Button>
                  <Button size="small" color="secondary" variant="outlined">
                    Disable
                  </Button>
                </>
              ),
            }}
          </CardWithImage>
        </Grid>

        <Grid item sm={4} md={2}>
          <CardWithImage isComingSoon={false}>
            {{
              actions: (
                <>
                  <Button size="small" color="primary" variant="outlined">
                    Settings
                  </Button>
                  <Button size="small" color="secondary" variant="outlined">
                    Disable
                  </Button>
                </>
              ),
            }}
          </CardWithImage>
        </Grid>
      </Grid>
      <h2 className={classes.titleAvaliable}>Available Connectors (11)</h2>
      <Card>
        <CardContent className={classes.root}>
          <ComponentTabs
            routes={availableIntegrations}
            showExtraInfo={true}
            withDivider={true}
          />
          <Route exact path={match.path}>
            {<Redirect to={`${match.path}/fulfilment`} />}
          </Route>
          {availableIntegrations.map((route: any) => (
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
