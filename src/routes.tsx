import React from "react";
import { Route, HashRouter, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Apod from "./pages/APOD";

const src: React.FC = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/apod" component={Apod} />
      </Switch>
    </HashRouter>
  );
};

export default src;
