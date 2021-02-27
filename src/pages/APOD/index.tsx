import React from "react";
import { Container } from "./styles";
import { useApodContex } from "../../context/ApodContext";

import SideBar from "./components/Sidebar";
import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";
import ThirdPage from "./components/ThirdPage";

const APOD: React.FC = () => {
  const { activePage } = useApodContex();
  return (
    <>
      <Container>
        <SideBar />
        {activePage.page === "FirstPage" ? <FirstPage /> : ""}
        {activePage.page === "SecondPage" ? <SecondPage /> : ""}
        {activePage.page === "ThirdPage" ? <ThirdPage /> : ""}
      </Container>
    </>
  );
};

export default APOD;
