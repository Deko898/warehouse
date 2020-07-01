import React from "react";
import "./App.css";
import Layout from "./common/components/Layout/Layout";
import Login from "./auth/Login/Login";
import { Provider } from "react-redux";
import configureStore from "./store/store";
import { IAppState } from "./store/app-state.interface";
import { Store } from "redux";
import { Route, Switch, BrowserRouter } from "react-router-dom";

const store: Store<IAppState> = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      {/* <Layout/> */}
      {/* {localStorage.getItem("3linxUser") ? <Layout /> : <Login />} */}
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/">
            <Layout />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}
