import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: theme.palette.secondary.main,
      color: "#fff",
      "& text": {
        fill: "#fff",
      },
    },
  })
);

const useFinansicalStyles = makeStyles({
  subTitle: {
    fontSize: "12px",
    marginBottom: '8px',
  },
  profit: {
    marginLeft: "5px",
    fontSize: "14px",
    color: "#33bcbc",
  },
  loss: {
    marginLeft: "5px",
    fontSize: "14px",
    color: "red",
  },
});

export default function FinansicalStats() {
  const classes = useStyles();
  const fClasses = useFinansicalStyles();
  return (
    <Card className={classes.root}>
      <CardHeader title="Finansical Stats" />
      <CardContent style={{ height: "250px" }}>
        <Typography variant="h5">
          $295.8k
          <span className={fClasses.profit}>
            <i
              className="fa fa-caret-up"
              aria-hidden="true"
              style={{ verticalAlign: "middle" }}
            ></i>
            52%
          </span>
        </Typography>
        <Typography className={fClasses.subTitle}>
          This Month - Revenue
        </Typography>
        <Typography variant="h5">
          $29.3k
          <span className={fClasses.loss}>
            <i
              className="fa fa-caret-down"
              aria-hidden="true"
              style={{ verticalAlign: "middle" }}
            ></i>
            4%
          </span>
        </Typography>
        <Typography className={fClasses.subTitle}>
          This Month - Projected Income
        </Typography>
        <Typography variant="h5">
          $2.60M
          <span className={fClasses.profit}>
            <i
              className="fa fa-caret-up"
              aria-hidden="true"
              style={{ verticalAlign: "middle" }}
            ></i>
            90%
          </span>
        </Typography>
        <Typography className={fClasses.subTitle}>
          This Year - Revenue
        </Typography>
        <Typography variant="h5">
          $291.1k
          <span className={fClasses.loss}>
            <i
              className="fa fa-caret-down"
              aria-hidden="true"
              style={{ verticalAlign: "middle" }}
            ></i>
            6%
          </span>
        </Typography>
        <Typography className={fClasses.subTitle}>
          This Year - Income
        </Typography>
      </CardContent>
    </Card>
  );
}
