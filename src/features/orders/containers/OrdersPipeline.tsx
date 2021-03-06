import {
  Route,
  Redirect,
  withRouter,
  RouteComponentProps,
} from "react-router-dom";
import React from "react";
import ComponentTabs from "../../../common/components/ComponentTabs/ComponentTabs";
import { orderPipelineRoutes } from "../routes/OrdersRoutes";
import { Grid, Card, CardContent } from "@material-ui/core";
import { BarChart } from "../../../charts/Bar";
import { DoughnutChart } from "../../../charts/Doughnut";
import { LineChart } from "../../../charts/Line";
import { SideBySideStacked } from "../../../charts/SideBySideStackedBar";
import useOrderStyles from "./OrdersStyles";
import StyledMenuWithIcon from "../../../common/components/Sidenav/StyledMenuWithIcon";
import {
  faCloudDownloadAlt,
  faEllipsisV,
  faListAlt
} from "@fortawesome/free-solid-svg-icons";
import AppBreadcrumbs from "../../../common/components/BreadCrumbs/BreadCrumbs";
import AddIcon from "@material-ui/icons/Add";
import { Button, Hidden } from "@material-ui/core";
import SearchBar from "../../../common/components/ComponentTabs/SearchBar";

const OrdersPipeline: React.FunctionComponent<RouteComponentProps> = ({
  match,
  location,
}) => {
  const classes = useOrderStyles();
  const mapOrdersPipelineRoutes = orderPipelineRoutes.map((r) => r.path);
  const handleItemClick = () => {};
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
    <div>
      <div className={classes.breadCrumbsAndInputsContainer}>
        <AppBreadcrumbs breadcrumbs={breadcrumbs} />
        <Hidden smUp implementation="css">
          <div className={classes.smallMenuVertical}>
            <StyledMenuWithIcon
              color="secondary"
              icon={faEllipsisV}
              handleItemClick={handleItemClick}
              items={[{ text: "Create" }, { text: "Export CSV" }]}
            />
          </div>
        </Hidden>
        <Hidden xsDown implementation="css">
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
              handleItemClick={handleItemClick}
              variant="contained"
              color="secondary"
              icon={faCloudDownloadAlt}
              items={[{ text: "Export CSV" }]}
              text="Download"
            />
          </div>
        </Hidden>
      </div>
      {/* <div className={classes.chartWrapper}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <BarChart height={240}/>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <LineChart/>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <SideBySideStacked />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <DoughnutChart />
          </Grid>
        </Grid>
      </div> */}
      <Card>
        <CardContent className={classes.root}>
          <div className={classes.tabsWrapper}>
            <ComponentTabs
              routes={orderPipelineRoutes}
              showExtraInfo={true}
              withDivider={false}
            />
            <div className={classes.inputsCardHeaderWrapper}>
              <StyledMenuWithIcon
                handleItemClick={handleItemClick}
                variant="contained"
                color="secondary"
                icon={faListAlt}
                items={[{ text: "Move to Pending" },{ text: "Delete" }]}
                text="Bulk Actions"
              />
              <SearchBar />
            </div>
          </div>

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
    </div>
  );
};

export default withRouter(OrdersPipeline);
