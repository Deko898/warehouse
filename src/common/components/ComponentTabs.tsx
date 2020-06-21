import React from "react";
import { withRouter, RouteComponentProps, Link } from "react-router-dom";
import { Tabs, Tab } from "@material-ui/core";

interface IProps extends RouteComponentProps {
  routes: any[];
}

const TabContent: React.FunctionComponent<{ name: string }> = ({ name }) => {
  return (
    <div>
      <div>{name}</div>
    </div>
  );
};

const ComponentTabs: React.FunctionComponent<IProps> = ({
  history,
  match,
  routes,
}) => {

  return (
    <Tabs 
    value={history.location.pathname}
    variant="scrollable"
    scrollButtons="auto"
    >
      {routes.map((r) => {
        return (
          <Tab
            label={<TabContent name={r.name} />}
            component={Link}
            to={`${match.url}${r.path}`}
            key={r.path}
            value={`${match.url}${r.path}`}
          ></Tab>
        );
      })}
    </Tabs>
  );
};

export default withRouter(ComponentTabs);
