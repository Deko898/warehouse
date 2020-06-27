import React from "react";
import "./App.css";
import Layout from "./common/components/Layout/Layout";
import { Provider } from "react-redux";
import configureStore from "./store/store";
import { IAppState } from "./store/app-state.interface";
import { Store } from "redux";

const store: Store<IAppState> = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
}

export default App;
