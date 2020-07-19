import React, { useState, useEffect } from "react";
import { withRouter, RouteComponentProps, Link } from "react-router-dom";
import { Tabs, Tab } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import { useStyles } from "./componentTabs.style";
import SearchBar from "./SearchBar";

interface IProps extends RouteComponentProps {
  routes: any[];
  showExtraInfo: boolean;
  withDivider: boolean;
}

const TabContent: React.FunctionComponent<{
  name: string;
  showExtraInfo: boolean;
}> = ({ name, showExtraInfo }) => {
  const classes = useStyles();

  return (
    <div>
      <div>{name}</div>
      {showExtraInfo && <div className={classes.tabSecondItem}>0</div>}
    </div>
  );
};

const ComponentTabs: React.FunctionComponent<IProps> = ({
  history,
  match,
  routes,
  showExtraInfo = false,
  withDivider = false,
}) => {
  const [value, setValue] = useState(0);
  const classes = useStyles();
  const handleRoute = (e: any, newValue: any) => {
		setValue(newValue);
  };
  useEffect(() => {
		[...routes].forEach((route) => {
      if(history.location.pathname.includes(route.path) && value !== route.activeIndex) {
        setValue(route.activeIndex);
      }
		});
	}, [value, routes, history.location.pathname]);
  return (
    <React.Fragment>
      <Tabs
        value={value}
        onChange={handleRoute}
        variant="scrollable"
        scrollButtons="auto"
        className={classes.root}
      >
        {routes.map((r) => {
          return (
            <Tab
              label={<TabContent name={r.name} showExtraInfo={showExtraInfo} />}
              component={Link}
              to={`${match.url}${r.path}`}
              key={r.path}
            ></Tab>
          );
        })}
        <Tab component={SearchBar} ></Tab>
      </Tabs>
      {withDivider && <Divider light />}
    </React.Fragment>
  );
};

export default withRouter(ComponentTabs);
