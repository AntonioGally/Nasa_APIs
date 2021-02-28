import React from "react";
import { Container } from "./styles";
import NavBar from "./NavBar";

const SecondPage: React.FC = () => {
  return (
    <>
      <div style={{ width: "100%" }}>
        <NavBar />
        <Container></Container>
      </div>
    </>
  );
};

export default SecondPage;
