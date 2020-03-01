import React, { Fragment } from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Game from "../Containers/Game";
import About from "../Components/About";

export default function MainRouter() {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Game />
          </Route>
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}