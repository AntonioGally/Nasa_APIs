import React from "react";
import { useNeowsContext } from "../../context/NeowsContext";
import { Container } from "./styles";
import SideBar from "./components/Sidebar";
import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";

const Neows: React.FC = () => {
  const { activePage } = useNeowsContext();
  return (
    <>
      <Container>
        <SideBar />
        {activePage === "FirstPage" ? <FirstPage /> : ""}
        {activePage === "SecondPage" ? <SecondPage /> : ""}
      </Container>
    </>
  );
};

export default Neows;
