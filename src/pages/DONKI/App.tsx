import React from "react";
import { useDonkiContext } from "../../context/DonkiContext";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import FirstPage from "./components/FirstPage";

const DONKI: React.FC = () => {
  const { activePage } = useDonkiContext();
  return (
    <>
      <Container>
        <Sidebar />
        {activePage === "FirstPage" && <FirstPage />}
      </Container>
    </>
  );
};

export default DONKI;

export const Container = styled.div`
  display: flex;
`;
