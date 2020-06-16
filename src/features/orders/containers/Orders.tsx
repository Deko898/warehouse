import {
  Route,
  Redirect,
  RouteComponentProps,
  withRouter,
} from "react-router-dom";
import React from "react";
import ComponentTabs from "../../../common/components/ComponentTabs";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { orderPipelineRoutes, ordersRoutes } from "../routes/OrdersRoutes";
import useOrderStyles from "./OrdersStyles";
import AppBreadcrumbs from "../../../common/components/BreadCrumbs";
import AddIcon from "@material-ui/icons/Add";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import { AppTabs } from "../../../common/components/AppTabs";

const Orders: React.FunctionComponent<RouteComponentProps> = ({
  match,
  location,
}) => {
  const classes = useOrderStyles();
  const mapOrdersPipelineRoutes = orderPipelineRoutes.map((r) => r.path);
  const exist = mapOrdersPipelineRoutes.find((p) =>
    location.pathname.includes(p)
  );
  let breadcrumbs = location.pathname;
  if (exist) {
    const lp = location.pathname.split("/");
    lp.splice(lp.length - 1, 1);
    breadcrumbs = lp.join("/");
  }
  return (
    <div className={classes.ordersPiplineContainer}>
      <AppTabs routes={ordersRoutes} />
      <div className={classes.breadCrumbsAndInputsContainer}>
        <AppBreadcrumbs breadcrumbs={breadcrumbs} />
        <div className={classes.inputsContainer}>
          <Button variant="contained" color="primary" startIcon={<AddIcon />}>
            Create
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.exportBtn}
            startIcon={<CloudDownloadIcon />}
          >
            Download
          </Button>
          {/* <IconButton>

          </IconButton> */}
          {/* <TextField
            label="Search"
            color="secondary"
            variant="outlined"
            size="small"
          /> */}
        </div>
      </div>
      <Card>
        <CardContent className={classes.root}>
          {/* <div className={classes.chartWrapper}>Chart</div> */}
          <Route path={match.path}>
            {<Redirect to={`${match.path}/manage-orders`} />}
          </Route>
          {ordersRoutes.map((route: any) => (
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

export default withRouter(Orders);
