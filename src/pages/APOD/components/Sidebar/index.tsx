import React from "react";
import {
  Container,
  ButtonsContent,
  Button,
  SvgToggle,
  SvgToggleClose,
} from "./styles";
import { useApodContex } from "../../../../context/ApodContext";

import { Redirect } from "react-router-dom";

const Sidebar: React.FC = () => {
  const { activePage, setActivePage } = useApodContex();
  const [back, setBack] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  if (back) {
    return <Redirect to="/" />;
  }
  return (
    <>
      <SvgToggle onClick={() => setOpen(!open)} />
      <Container className={open ? "openToggle" : ""}>
        <SvgToggleClose onClick={() => setOpen(!open)} />
        <span onClick={() => setBack(true)}>Voltar</span>
        <ButtonsContent>
          <Button
            onClick={() => setActivePage({ page: "FirstPage" })}
            className={
              activePage.page === "FirstPage" ? "ButtonActiveApod" : ""
            }
          >
            Foto do dia
          </Button>
          <Button
            onClick={() => setActivePage({ page: "SecondPage" })}
            className={
              activePage.page === "SecondPage" ? "ButtonActiveApod" : ""
            }
          >
            Fotos específicas
          </Button>
          <Button
            onClick={() => setActivePage({ page: "ThirdPage" })}
            className={
              activePage.page === "ThirdPage" ? "ButtonActiveApod" : ""
            }
          >
            Fotos aleatórias
          </Button>
        </ButtonsContent>
      </Container>
    </>
  );
};

export default Sidebar;
