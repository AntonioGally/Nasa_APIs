import React from "react";
import { Route, HashRouter, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Apod from "./pages/APOD";
import Neows from "./pages/Neows";
import Donki from "./pages/DONKI";
import EONET from "./pages/EONET";

const src: React.FC = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/apod" component={Apod} />
        <Route path="/neows" component={Neows} />
        <Route path="/donki" component={Donki} />
        <Route path="/eonet" component={EONET} />
      </Switch>
    </HashRouter>
  );
};

export default src;
