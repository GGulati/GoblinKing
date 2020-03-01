import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import AboutPage from "../Components/Pages/AboutPage";
import GamePage from '../Components/Pages/GamePage';

export default function MainRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/">
          <GamePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}