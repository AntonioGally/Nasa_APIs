import React from "react";
import { Container, Wrapper } from "./styles";
import NavBar from "./NavBar";
import FirstContent from "./FirstContent";
import SecondContent from "./SecondContent";
const SecondPage: React.FC = () => {
  return (
    <>
      <Wrapper>
        <NavBar />
        <Container>
          <FirstContent />
          <SecondContent />
        </Container>
      </Wrapper>
    </>
  );
};

export default SecondPage;
