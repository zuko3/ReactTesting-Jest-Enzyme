import React from "react";
import { Provider } from "react-redux";
import { Link, Router } from "react-router-dom";
import Routes from "../Routes";
import store from "../store";
import "./index.css";
import history from "../history";

export default function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <div className="app">
          <h1>BEST APP EVER</h1>
          <Link to="/choose-your-pokemon">Choose Your Pokemon</Link>
          <Routes />
        </div>
      </Router>
    </Provider>
  );
}
