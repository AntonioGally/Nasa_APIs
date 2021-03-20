import React from "react";
import DonkiProvider from "../../context/DonkiContext";
import App from "./App";

const DONKI: React.FC = () => {
  return (
    <DonkiProvider>
      <App />
    </DonkiProvider>
  );
};

export default DONKI;
