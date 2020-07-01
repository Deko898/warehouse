import React from "react";
import { useStyles } from "./noMatch.styles";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

export default function NoMatch() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.noMatchContainer}>
      <div className={classes.noMatchNumber}>404</div>
      <div className={classes.noMatchDescription}>
        <div className={classes.noMatchTitle}>We couldn't find it...</div>
        <div className={classes.noMatchSubTitle}>
          <p>The page you're looking for doesn't exist.</p>
          <p>Perhaps, there pages will help find what you're looking for.</p>
        </div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => history.push("/")}
        >
          Home
        </Button>
      </div>
    </div>
  );
}
