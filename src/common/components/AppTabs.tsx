import React from "react";
import AppTabMenu from "./AppTabMenu";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { withRouter, RouteComponentProps } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appTabs: {
      display: "flex",
      background: "#fff",
      boxShadow:
        "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
    },
    root: {
      padding: "0px",
    },
  })
);

interface IProps extends RouteComponentProps {
  routes: any[];
}
const AppTabs: React.FunctionComponent<IProps> = ({
  routes,
  history,
}: IProps) => {
  const classes = useStyles();
  return (
    <Tabs
      value={history.location.pathname}
      className={classes.appTabs}
      variant="scrollable"
      scrollButtons="auto"
    >
      {routes.map((r) => (
        <Tab
          className={classes.root}
          key={r.path}
          label={<AppTabMenu items={r.children} parent={r} />}
        />
      ))}
    </Tabs>
  );
};
export default withRouter(AppTabs);
