import React from "react";
import { useNeowsContext } from "../../context/NeowsContext";
import { Container } from "./styles";
import SideBar from "./components/Sidebar";
import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";
import AboutPage from "./components/AboutPage";

const Neows: React.FC = () => {
  const { activePage } = useNeowsContext();
  return (
    <>
      <Container>
        <SideBar />
        {activePage === "FirstPage" ? <FirstPage /> : ""}
        {activePage === "SecondPage" ? <SecondPage /> : ""}
        {activePage === "AboutPage" ? <AboutPage /> : ""}
      </Container>
    </>
  );
};

export default Neows;
