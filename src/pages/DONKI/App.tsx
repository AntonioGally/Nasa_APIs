import React from "react";
import { useDonkiContext } from "../../context/DonkiContext";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import FirstPage from "./components/FirstPage";
import ThirdPage from "./components/ThirdPage";

const DONKI: React.FC = () => {
  const { activePage } = useDonkiContext();
  return (
    <>
      <Container>
        <Sidebar />
        {activePage === "FirstPage" && <FirstPage />}
        {activePage === "ThirdPage" && <ThirdPage />}
      </Container>
    </>
  );
};

export default DONKI;

export const Container = styled.div`
  display: flex;
`;
