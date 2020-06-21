import {
  Route,
  Redirect,
  RouteComponentProps,
  withRouter,
} from "react-router-dom";
import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import { Button } from "@material-ui/core";
import { orderPipelineRoutes, ordersRoutes } from "../routes/OrdersRoutes";
import useOrderStyles from "./OrdersStyles";
import AppBreadcrumbs from "../../../common/components/BreadCrumbs";
import AddIcon from "@material-ui/icons/Add";
import AppTabs from "../../../common/components/AppTabs";
import StyledMenuWithIcon from "../../../common/components/StyledMenuWithIcon";
import { faCloudDownloadAlt } from "@fortawesome/free-solid-svg-icons";
import OrderDetails from "./OrderDetails";

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
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            className={classes.createBtn}
          >
            Create
          </Button>
          <StyledMenuWithIcon
            variant="contained"
            color="secondary"
            icon={faCloudDownloadAlt}
            items={[{ text: "Export CSV" }]}
            text="Download"
          />
        </div>
      </div>
      <Route path={match.path} exact>
        {<Redirect to={`${match.path}/manage-orders`} />}
      </Route>
      {ordersRoutes.map((route: any) => (
        <Route
          path={`${match.path}${route.path}`}
          key={route.path}
          component={route.component}
        />
      ))}
      <Route path={"/orders/details/:orderId"} component={OrderDetails} />
    </div>
  );
};

export default withRouter(Orders);
