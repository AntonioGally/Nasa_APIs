import React from "react";
import { Route, HashRouter, Switch } from "react-router-dom";

import ApodProvider from "./context/ApodContext";

import Home from "./pages/Home";
import Apod from "./pages/APOD";
import Neows from "./pages/Neows";
import Donki from "./pages/DONKI";

const src: React.FC = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <ApodProvider>
          <Route path="/apod" component={Apod} />
        </ApodProvider>
        <Route path="/neows" component={Neows} />
        <Route path="/donki" component={Donki} />
      </Switch>
    </HashRouter>
  );
};

export default src;
