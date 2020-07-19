import React, { useRef } from "react";
import { withRouter } from "react-router-dom";
import { Button } from "@material-ui/core";
import { useStyles } from "./fileUpload.styles";
import DropZone from "../../../../common/components/DropZone/DropZone";

function CreateOrder() {
  const classes = useStyles();

  const handleFileDrop = (e: any) => {
    console.log(fileInputRef.current, "EEE");
    // fileInputRef.current
    fileInputRef.current.files = e;
  };

  const fileInputRef: any = useRef();

  return (
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
          ref={fileInputRef}
        />
        {/* <input
          accept=".xls,.xlsx,.csv"
          ref={fileInputRef}
          className={classes.input}
          id="contained-button-file"
          type="file"
        /> */}
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

        <label htmlFor="contained-button-file" className={classes.mLeft}>
          <Button
            size="small"
            color="secondary"
            variant="contained"
            component="span"
            className={classes.button}
            startIcon={
              <i className="fa fa-cloud-download" aria-hidden="true"></i>
            }
          >
            Download Templete
          </Button>
        </label>
      </div>
      <DropZone handleFileDrop={handleFileDrop} />
    </div>
  );
}

export default withRouter(CreateOrder);
