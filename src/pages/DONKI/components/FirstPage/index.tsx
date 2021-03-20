import React from "react";
import particleOptions from "../../stars.json";
import Particles from "react-tsparticles";
import { Container } from "./styles";

const FirstPage: React.FC = () => {
  return (
    <div style={{ width: "100vw" }}>
      <Particles
        options={particleOptions as unknown}
        style={{ width: "100vw", zIndex: -1000, position: "absolute" }}
      />
      <Container>
        <h1 style={{ color: "white" }}>Mané</h1>
      </Container>
    </div>
  );
};

export default FirstPage;
