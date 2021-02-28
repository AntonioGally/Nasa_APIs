import React, { memo } from "react";
import Content from "./Content";
import NavBar from "../../GlobalComponents/NavBar";

const Home: React.FC = () => {
  return (
    <>
      <NavBar />
      <Content />
    </>
  );
};

export default memo(Home);
