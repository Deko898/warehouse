import {
    Route,
    Redirect,
    withRouter,
    RouteComponentProps,
    Switch,
  } from "react-router-dom";
  import React from "react";
import ManageIntegration from "./ManageIntegration";
  
  const Integrations: React.FunctionComponent<RouteComponentProps> = ({
    match,
  }) => {
    return (
        <Switch>
        <Route exact path={match.path}>
          {<Redirect to={`${match.url}/manage-integration`} />}
        </Route>
        <Route path={`${match.url}/manage-integration`} component={ManageIntegration} />
        <Route path={`${match.url}/create-integration`} component={() => <div>C Int</div>} />
        <Route path={`${match.url}/integration-lookup`} component={() => <div>Int lookup</div>} />
      </Switch>
    );
  };
  
  export default withRouter(Integrations);
  