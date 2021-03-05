import React from "react";
import NeowsProvider from "../../context/NeowsContext";
import App from "./App";

const Neows: React.FC = () => {
  return (
    <>
      <NeowsProvider>
        <App />
      </NeowsProvider>
    </>
  );
};

export default Neows;
