import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

import Routes from "./routes";

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
