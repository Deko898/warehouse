import React from "react";
import AppTabMenu from "./AppTabMenu";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { useStyles } from "./styles/appTabs.styles";

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
          component="div"
          key={r.path}
          label={<AppTabMenu items={r.children} parent={r} />}
        />
      ))}
    </Tabs>
  );
};
export default withRouter(AppTabs);
