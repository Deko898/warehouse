import React from "react";
import { Grid } from "@material-ui/core";
import { useStyles } from "./fullfilment.styles";
import CardWithImage from "../../components/Card/Card";

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const Fulfilment: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.fullfilmentWrapper}>
      {arr.map((n) => (
        <Grid item md={2}>
          <CardWithImage />
        </Grid>
      ))}
    </Grid>
  );
};

export default Fulfilment;
