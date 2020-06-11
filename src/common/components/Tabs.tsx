import React, { Component } from "react";
import { withRouter, RouteComponentProps, Link } from "react-router-dom";
import { Tabs, Tab } from "@material-ui/core";

interface IProps extends RouteComponentProps {
  routes: any[];
}

const TabContent: React.FunctionComponent<{ name: string }> = ({ name }) => {
  return (
    <div>
      <div>{name}</div>
      <div>0</div>
    </div>
  );
};

const AppTabs: React.FunctionComponent<IProps> = ({
  history,
  match,
  routes,
}) => {
  return (
    <Tabs value={history.location.pathname}>
      {routes.map((r) => (
        <Tab
          label={<TabContent name={r.name} />}
          to={`${match.url}${r.link}`}
          key={r.link}
          value={`${match.url}${r.link}`}
          component={Link}
        >
          <span>0</span>
        </Tab>
      ))}
    </Tabs>
  );
};

export default withRouter(AppTabs);
