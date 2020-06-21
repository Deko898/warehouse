import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    uploadContainer: {
      padding: '20px'
    },
    uploadContent: {
      padding: '10px'
    },
    button: {
      textTransform: 'none',
    },
    input: {
      display: 'none'
    }
  })
);

 function CreateOrder() {
  const classes = useStyles();
  return (
    <Paper>
       <div className={classes.uploadContainer}>
         <div className={classes.uploadContent}>
         <span style={{fontWeight: 'bold'}}>File upload</span>
         <span style={{marginLeft: '10px'}}>
           Upload a batch file of Orders. ( Excel (xls,xlsx,csv) Format Only)</span>
         </div>
       <div className={classes.uploadContent}>
       <input
        accept="image/*"
        id="contained-input-file"
        type="file"
      />
    <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button 
        size="small"
        variant="contained" component="span" className={classes.button}>
          Upload
        </Button>
      </label>
       </div>

    <div className={classes.uploadContent}>
      <Link to="">
      Download: Orders Templete.xlsx
      </Link>
    </div>
    </div>
    </Paper>
  );
}
    
export default withRouter(CreateOrder);
