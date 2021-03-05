import React from "react";
import ApodProvider from "../../context/ApodContext";
import App from "./App";

const APOD: React.FC = () => {
  return (
    <>
      <ApodProvider>
        <App />
      </ApodProvider>
    </>
  );
};

export default APOD;
