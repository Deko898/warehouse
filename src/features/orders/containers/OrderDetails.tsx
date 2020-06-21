import React from "react";
import LeafletMap from "../../../common/components/Map";
import { Card, CardContent, CardHeader } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core";

const useCardContentStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "400px",
      padding: "0",
      "&:last-child": {
        paddingBottom: "0",
      },
    },
  })
);

const useCardStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "500px",
      "& .MuiCardHeader-root": {
        background: theme.palette.secondary.dark,
      },
    },
  })
);

const OrderDetails: React.FunctionComponent = () => {
  const cardClasses = useCardStyles();
  const contentClasses = useCardContentStyles();
  return (
    <Card className={cardClasses.root}>
      <CardHeader />
      <CardContent className={contentClasses.root}>
        <LeafletMap />
      </CardContent>
    </Card>
  );
};

export default OrderDetails;
