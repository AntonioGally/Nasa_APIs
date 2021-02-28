import React from "react";
import { Container } from "./styles";
import NavBar from "./NavBar";
import FirstContent from "./FirstContent";
import SecondContent from "./SecondContent";
const SecondPage: React.FC = () => {
  return (
    <>
      <div style={{ width: "100%" }}>
        <NavBar />
        <Container>
          <FirstContent />
          <SecondContent />
        </Container>
      </div>
    </>
  );
};

export default SecondPage;
