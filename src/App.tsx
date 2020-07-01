import React from "react";
import "./App.css";
import Layout from "./common/components/Layout/Layout";
import NoMatch from "./common/components/NoMatch/NoMatch";
import Login from "./auth/Login/Login";
import { Provider } from "react-redux";
import configureStore from "./store/store";
import { IAppState } from "./store/app-state.interface";
import { Store } from "redux";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./common/hoc/PrivateRoute";

const store: Store<IAppState> = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute path="/" component={Layout} />
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Provider>
  );
}
