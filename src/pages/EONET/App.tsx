import React from "react";
import particleOptions from "./stars.json";
import Particles from "react-tsparticles";
import styled from "styled-components";
import gif from "./gif_dev.gif";
import { Link } from "react-router-dom";
const EONET: React.FC = () => {
  return (
    <div style={{ width: "100vw" }}>
      <Particles
        options={particleOptions as unknown}
        style={{ width: "100vw", zIndex: -1000, position: "absolute" }}
      />
      <Container>
        <DevContent>
          <img src={gif} alt="Gif Development" />
          <h1>Em desenvolvimento :D</h1>
          <Link to="/">
            <h3>Voltar</h3>
          </Link>
        </DevContent>
      </Container>
    </div>
  );
};

export default EONET;

export const Container = styled.div`
  overflow: hidden;
  padding: 10px;
`;
export const DevContent = styled.div`
  background: white;
  width: 50%;
  padding: 15px;
  margin: 80px auto 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 1000px) {
    width: 100%;
    > h1 {
      font-size: 24px;
    }
    > a > h3 {
      font-size: 20px;
    }
  }
  > img {
    width: 100%;
  }
`;
