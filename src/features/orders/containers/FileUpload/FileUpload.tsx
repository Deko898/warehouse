import React from "react";
import { withRouter, Link } from "react-router-dom";

import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    uploadContainer: {
      padding: theme.spacing(2),
    },
    uploadContent: {
      padding: theme.spacing(1, 0),
    },
    mLeft: {
      marginLeft: theme.spacing(1),
    },
    button: {
      textTransform: "none",
    },
    input: {
      display: "none",
    },
  })
);

function CreateOrder() {
  const classes = useStyles();
  return (
    <Paper>
      <div className={classes.uploadContainer}>
        <div className={classes.uploadContent}>
          <i className="fa fa-folder" aria-hidden="true"></i>
          <span style={{ fontWeight: "bold" }} className={classes.mLeft}>
            File upload
          </span>
          <span className={classes.mLeft}>
            Upload a batch file of Orders. ( Excel (xls,xlsx,csv) Format Only)
          </span>
        </div>
        <div className={classes.uploadContent}>
          <input
            id="contained-input-file"
            type="file"
            accept=".xls,.xlsx,.csv"
          />
          <input
            accept=".xls,.xlsx,.csv"
            className={classes.input}
            id="contained-button-file"
            type="file"
          />
          <label htmlFor="contained-button-file">
            <Button
              size="small"
              color="primary"
              variant="contained"
              component="span"
              className={classes.button}
              startIcon={<i className="fa fa-upload" aria-hidden="true"></i>}
            >
              Upload
            </Button>
          </label>
        </div>

        <div className={classes.uploadContent}>
          <Link to="">
            <i className="fa fa-folder" aria-hidden="true"></i>
            <span className={classes.mLeft}>
              Download: Orders Templete.xlsx
            </span>
          </Link>
        </div>
      </div>
    </Paper>
  );
}

export default withRouter(CreateOrder);
