import React, { useRef } from "react";
import { withRouter } from "react-router-dom";
import { Button } from "@material-ui/core";
import { useStyles } from "./fileUpload.styles";
import DropZone from "../../../../common/components/DropZone/DropZone";
import DeleteIcon from "@material-ui/icons/Delete";

function CreateOrder() {
  const classes = useStyles();
  const fileInputRef: any = useRef();
  const [files, setFiles] = React.useState([]);

  const handleFileDrop = (files: any) => {
    fileInputRef.current.files = files;
    setFiles(Array.from(files));
  };

  const fileSelectHandler = (e: any) => {
    setFiles(Array.from(e.target.files));
  };

  const removeFile = (fileName: string) => {
    const newFiles = files.filter((f) => f.name !== fileName);
    setFiles(newFiles);
  };

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
      <div className={classes.uploadDropzoneContent}>
        <input
          id="contained-input-file"
          type="file"
          multiple
          style={{ display: "none" }}
          ref={fileInputRef}
          onChange={(e) => fileSelectHandler(e)}
        />
        <DropZone handleFileDrop={handleFileDrop} />
        <div className={classes.filesContainer}>
          <div
            onClick={() => fileInputRef.current.click()}
            className={classes.browseContainer}
          >
            <span>browse</span>
          </div>
          <div>
            {files.map((f) => (
              <div key={f.name} className={classes.fileItem}>
                <span>{f.name}</span>
                <DeleteIcon onClick={() => removeFile(f.name)} />
              </div>
            ))}
          </div>
        </div>
        <div className={classes.buttonsWrapper}>
          <label htmlFor="contained-button-file" style={{
            marginRight:'8px'
          }}>
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

          <label htmlFor="contained-button-file">
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
      </div>
    </div>
  );
}

export default withRouter(CreateOrder);
