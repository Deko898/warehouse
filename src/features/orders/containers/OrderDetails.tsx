import React from "react";
import LeafletMap from "../../../common/components/Map";
import { Card, CardContent, CardHeader, Grid } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core";
import clsx from "clsx";
import StyledMenuWithIcon from "../../../common/components/StyledMenuWithIcon";
import {
  faCloudDownloadAlt,
  faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";
import AppBreadcrumbs from "../../../common/components/BreadCrumbs";
import EditIcon from "@material-ui/icons/Edit";
import { Button, Hidden } from "@material-ui/core";
import useOrderStyles from "./OrdersStyles";
import { useLocation } from "react-router-dom";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useCardContentStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "392px",
      maxHeight: "392px",
      overflowY: "auto",
      padding: "0",
      "&:last-child": {
        paddingBottom: "0",
      },
    },
    leafletRoot: {
      height: "432px",
      maxHeight: "432px",
    },
    orderTopLayoutDetails: {
      display: "flex",
      fontSize: "20px",
      [theme.breakpoints.down("sm")]: {
        flexFlow: "column",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "18px",
      },
    },
    orderTopLayoutDetail: {
      display: "flex",
      marginRight: theme.spacing(2),
    },
    orderTopLayoutLabel: {
      marginRight: theme.spacing(1),
      color: theme.palette.primary.main,
    },
  })
);

const useItemTextStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      "& .MuiTypography-root": {
        fontWeight: 700,
      },
    },
  })
);

const order = {
  systemId: "1537621",
  orderNumber: "FBA15N1ZDX9T",
  dc: "ALN",
  clientId: "CHEETAH",
  retailer: "AMZNFBADC",
  lines: 50,
  qty: 200,
  weigth: 628,
  shipMethod: "OTHER",
  completeBy: "Jun 15, 2020",
  status: "Being Packed",
};

const OrderDetails: React.FunctionComponent = () => {
  const itemTextClasses = useItemTextStyles();
  const classes = useOrderStyles();
  const contentClasses = useCardContentStyles();
  const location = useLocation();
  return (
    <div>
      <div className={classes.breadCrumbsAndInputsContainer}>
        <AppBreadcrumbs breadcrumbs={location.pathname} />
        <div className={contentClasses.orderTopLayoutDetails}>
          <div className={contentClasses.orderTopLayoutDetail}>
            <div className={contentClasses.orderTopLayoutLabel}>DC:</div>
            <div>{order.dc}</div>
          </div>
          <div className={contentClasses.orderTopLayoutDetail}>
            <div className={contentClasses.orderTopLayoutLabel}>
              Ship Method:
            </div>
            <div>{order.shipMethod}</div>
          </div>
        </div>
        <Hidden smUp implementation="css">
          <div className={classes.smallMenuVertical}>
            <StyledMenuWithIcon
              color="secondary"
              icon={faEllipsisV}
              items={[{ text: "Edit" }, { text: "Action" }]}
            />
          </div>
        </Hidden>
        <Hidden xsDown implementation="css">
          <div className={classes.inputsContainer}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<EditIcon />}
              className={classes.createBtn}
            >
              Edit
            </Button>
            <StyledMenuWithIcon
              variant="contained"
              color="secondary"
              icon={faCloudDownloadAlt}
              items={[{ text: "Action" }]}
              text="Actions"
            />
          </div>
        </Hidden>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardHeader title="Order Summary" />
            <CardContent className={contentClasses.root}>
              <List>
                <ListItem>
                  <ListItemText
                    primary="Client"
                    secondary=""
                    className={itemTextClasses.root}
                  />
                </ListItem>
                <Divider light component="li" />
                <ListItem>
                  <ListItemText
                    primary="Sys#"
                    secondary={order.systemId}
                    className={itemTextClasses.root}
                  />
                </ListItem>
                <Divider light component="li" />
                <ListItem>
                  <ListItemText
                    primary="Client#"
                    secondary={order.clientId}
                    className={itemTextClasses.root}
                  />
                </ListItem>
                <Divider light component="li" />
                <ListItem>
                  <ListItemText
                    primary="Cust PO#"
                    className={itemTextClasses.root}
                  />
                </ListItem>
                <Divider light component="li" />
                <ListItem>
                  <ListItemText
                    primary="Channel"
                    className={itemTextClasses.root}
                  />
                </ListItem>
                <Divider light component="li" />
                <ListItem>
                  <ListItemText
                    primary="Retailer"
                    secondary={order.retailer}
                    className={itemTextClasses.root}
                  />
                </ListItem>
                <Divider light component="li" />
                <ListItem>
                  <ListItemText
                    primary="Ship Start"
                    secondary="Mon, Aug 22, 2016"
                    className={itemTextClasses.root}
                  />
                </ListItem>
                <Divider light component="li" />
                <ListItem>
                  <ListItemText
                    primary="Ship End"
                    secondary="Wed, Aug 24, 2016"
                    className={itemTextClasses.root}
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent
              className={clsx(contentClasses.root, contentClasses.leafletRoot)}
            >
              <LeafletMap />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardHeader title="Ship To" />
            <CardContent className={contentClasses.root}></CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={8}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Card>
                <CardHeader title="Attachments" />
                <CardContent className={contentClasses.root}></CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <CardHeader title="Order References" />
                <CardContent className={contentClasses.root}></CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardHeader title="Order Detail" subheader="Sku" />
            <CardContent className={contentClasses.root}></CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={8}>
          <Card>
            <CardHeader title="Shipping Detail" subheader="Sku" />
            <CardContent className={contentClasses.root}></CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderDetails;
