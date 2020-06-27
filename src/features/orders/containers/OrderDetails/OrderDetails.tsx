import React from "react";
import { Card, CardContent, CardHeader, Grid } from "@material-ui/core";
import clsx from "clsx";
import StyledMenuWithIcon from "../../../../common/components/Sidenav/StyledMenuWithIcon";
import AppBreadcrumbs from "../../../../common/components/BreadCrumbs/BreadCrumbs";
import {
  faCloudDownloadAlt,
  faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";
import EditIcon from "@material-ui/icons/Edit";
import { Button, Hidden } from "@material-ui/core";
import useOrderStyles from "../OrdersStyles";
import { useLocation } from "react-router-dom";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faDownload } from "@fortawesome/free-solid-svg-icons";
import { useItemTextStyles, useCardContentStyles } from "./orderDetails.styles";
import { IOrderDetails } from "../../../../models";
import Loader from "../../../../common/components/Loader/Loader";
import LeafletMap from "../../../../common/components/Map/Map";
import { fetchOrderDetailsRequestAction } from "../../../../store/modules/order-details/actions";
import { IAppState } from "../../../../store/app-state.interface";

interface IProps {
  fetchOrderDetails: Function;
  orderDetails: IOrderDetails;
  isLoading: boolean;
}

const OrderDetails: React.FunctionComponent<IProps> = ({
  fetchOrderDetails,
  orderDetails,
  isLoading,
}) => {
  const location = useLocation();
  const itemTextClasses = useItemTextStyles();
  const classes = useOrderStyles();
  const contentClasses = useCardContentStyles();
  
  React.useEffect(() => {
    const [systemId] = location.pathname.split("/").reverse();
    fetchOrderDetails(systemId);
  }, [fetchOrderDetails, location]);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <div className={classes.breadCrumbsAndInputsContainer}>
            <AppBreadcrumbs breadcrumbs={location.pathname} />
            <div className={contentClasses.orderTopLayoutDetails}>
              <div className={contentClasses.orderTopLayoutDetail}>
                <div className={contentClasses.orderTopLayoutLabel}>DC:</div>
                <div>{orderDetails.orderSummary.dc}</div>
              </div>
              <div className={contentClasses.orderTopLayoutDetail}>
                <div className={contentClasses.orderTopLayoutLabel}>
                  Ship Method:
                </div>
                <div>{orderDetails.orderSummary.shipMethod}</div>
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
                        secondary={orderDetails.orderSummary.systemId}
                        className={itemTextClasses.root}
                      />
                    </ListItem>
                    <Divider light component="li" />
                    <ListItem>
                      <ListItemText
                        primary="Client#"
                        secondary={orderDetails.orderSummary.clientId}
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
                        secondary={orderDetails.orderSummary.retailer}
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
                  className={clsx(
                    contentClasses.root,
                    contentClasses.leafletRoot
                  )}
                >
                  <LeafletMap
                    positions={orderDetails.orderLocationCoordinates}
                    polyline={orderDetails.orderPath}
                  />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Card>
                <CardHeader title="Ship To" />
                <CardContent className={contentClasses.root}>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="Ship To:"
                        className={itemTextClasses.root}
                      />
                      <div className={itemTextClasses.secondaryItem}>
                        <p>{orderDetails.shipTo.name}</p>
                        <p>{orderDetails.shipTo.attachment}</p>
                        <p>{orderDetails.shipTo.street}</p>
                        <p>{orderDetails.shipTo.city}</p>
                        <p>{orderDetails.shipTo.country}</p>
                      </div>
                    </ListItem>
                    <Divider light component="li" />
                    <ListItem>
                      <ListItemText
                        primary="Bill to:"
                        className={itemTextClasses.root}
                      />
                      <div className={itemTextClasses.secondaryItem}>
                        <p>{orderDetails.billTo.name}</p>
                        <p>{orderDetails.billTo.account}</p>
                        <p>{orderDetails.billTo.product}</p>
                        <p>{orderDetails.billTo.street}</p>
                        <p>{orderDetails.billTo.city}</p>
                        <p>{orderDetails.billTo.country}</p>
                      </div>
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={8}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Card>
                    <CardHeader title="Attachments" />
                    <CardContent className={contentClasses.root}>
                      {orderDetails.attachments.map((attachment, index) => (
                        <React.Fragment key={index}>
                          <ListItem>
                            <ListItemText
                              primary={`${index + 1} ${attachment.name}`}
                              className={itemTextClasses.root}
                            />
                            <div
                              className={clsx(
                                itemTextClasses.secondaryItem,
                                itemTextClasses.iconsWrapper
                              )}
                            >
                              <FontAwesomeIcon icon={faDownload} />
                              <FontAwesomeIcon icon={faTrashAlt} />
                            </div>
                          </ListItem>
                          <Divider light />
                        </React.Fragment>
                      ))}
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Card>
                    <CardHeader title="Order References" />
                    <CardContent className={contentClasses.root}>
                      {orderDetails.references.map((reference, index) => (
                        <React.Fragment key={index}>
                          <ListItem>
                            <ListItemText
                              primary={`Ref ${index + 1}`}
                              secondary={reference.name}
                              className={itemTextClasses.root}
                            />
                          </ListItem>
                          <Divider light />
                        </React.Fragment>
                      ))}
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Card>
                <CardHeader
                  title="Order Detail"
                  subheader={`(SKU=${orderDetails.details.sku} | ShipinsValue=${orderDetails.details.shippingsValue} | Est.Wt=${orderDetails.details.estWt})`}
                />
                <CardContent className={contentClasses.root}></CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={8}>
              <Card>
                <CardHeader
                  title="Shipping Detail"
                  subheader={`${orderDetails.shippingDetail.boxes} Boxes | Total Weight = ${orderDetails.shippingDetail.totalWeight} | Total Shipping Cost = $ ${orderDetails.shippingDetail.totalShippingCost} | Total Cube = ${orderDetails.shippingDetail.totalCube} Cu.Feet.`}
                />
                <CardContent className={contentClasses.root}></CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      )}
    </div>
  );
};

// Make data available on props
const mapStateToProps = ({ orderDetailsState }: IAppState) => {
  return {
    orderDetails: orderDetailsState.orderDetails,
    isLoading: orderDetailsState.isLoading,
  };
};

// Make functions available on props
const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchOrderDetails: (systemId: string) => {
      return dispatch(
        fetchOrderDetailsRequestAction({ isLoading: true, systemId })
      );
    },
  };
};

// Connect the app aware container to the store and reducers
export default connect(mapStateToProps, mapDispatchToProps)(OrderDetails);
