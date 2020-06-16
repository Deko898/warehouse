import React from "react";
import AppTabMenu from "./AppTabMenu";
import {
  createStyles,
  Theme,
  makeStyles,
} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appTabs: {
      display: "flex",
      background: '#fff',
      boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)'
    },
  })
);

interface IProps {
  routes: any[];
}

export const AppTabs = ({ routes }: IProps) => {
  const classes = useStyles();
  return (
    <div className={classes.appTabs}>
      {routes.map((r) => (
        <AppTabMenu key={r.path} items={r.children} parent={r} />
      ))}
    </div>
  );
};
