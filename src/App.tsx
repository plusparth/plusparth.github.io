import React from "react";

import Home from "./pages/home/Home";

import logo from "./logo.svg";
import "./App.scss";
import { Route } from "react-router";
import Switch from "react-bootstrap/esm/Switch";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
