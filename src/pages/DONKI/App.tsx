import React from "react";
import { useDonkiContext } from "../../context/DonkiContext";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";
import ThirdPage from "./components/ThirdPage";
import AboutPage from "./components/AboutPage";

const DONKI: React.FC = () => {
  const { activePage } = useDonkiContext();
  return (
    <>
      <Container>
        <Sidebar />
        {activePage === "FirstPage" && <FirstPage />}
        {activePage === "SecondPage" && <SecondPage />}
        {activePage === "ThirdPage" && <ThirdPage />}
        {activePage === "AboutPage" && <AboutPage />}
      </Container>
    </>
  );
};

export default DONKI;

export const Container = styled.div`
  display: flex;
`;
