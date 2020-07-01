import React from "react";
import { useStyles } from "./comingSoon.styles";


export default function ComingSoon() {
  const classes = useStyles();

  return (
    <div className={classes.comingSoonContainer}>
        <img src="https://app.3linx.com/public/images/comming-soon.jpg" alt=""/>
    </div>
  );
}
