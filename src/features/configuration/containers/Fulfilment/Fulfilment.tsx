import React from "react";
import { Grid } from "@material-ui/core";
import { useStyles } from "./fullfilment.styles";
import CardWithImage from "../../components/Card/Card";
import Button from "@material-ui/core/Button";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const Fulfilment: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={2} className={classes.fullfilmentWrapper}>
      {arr.map((n) => (
        <Grid item sm={4} md={2} key={n}>
          <CardWithImage isComingSoon={true}>
            {{
              actions: (
                <>
                  <Button size="small" color="primary" variant="contained">
                    Enable
                  </Button>
                </>
              ),
            }}
          </CardWithImage>
        </Grid>
      ))}
    </Grid>
  );
};

export default Fulfilment;
