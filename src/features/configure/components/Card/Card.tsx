import React from "react";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { Card, CardContent } from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
import { useStyles } from "./card.styles";

const CardWithImage: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        alt="Amazon fulfillment"
        image="https://www.orderdesk.com/wp-content/uploads/2018/02/amazonfulfillmentreg-web-768x411.png"
        title="Amazon fulfillment"
      />
      <CardContent>
        <div className={classes.comingSoonWrapper}>
          <span className={classes.comingSoon}> Coming soon</span>
        </div>
        <p>Amazon fulfillment</p>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" variant="contained">
          Enable
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardWithImage;
