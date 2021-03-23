import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";

import Routes from "./routes";
import GlobalStyles from "./styles/GlobalStyles";

ReactDOM.render(
  <React.StrictMode>
    <>
      <Routes />
      <GlobalStyles />
    </>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
