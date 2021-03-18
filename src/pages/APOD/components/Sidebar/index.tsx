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
    <div style={{ zIndex: 100 }}>
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
            Intervalo de datas
          </Button>
          <Button
            onClick={() => setActivePage({ page: "ThirdPage" })}
            className={
              activePage.page === "ThirdPage" ? "ButtonActiveApod" : ""
            }
          >
            Única data
          </Button>
          <Button
            onClick={() => setActivePage({ page: "FourthPage" })}
            className={
              activePage.page === "FourthPage" ? "ButtonActiveApod" : ""
            }
          >
            Fotos aleatórias
          </Button>
          <Button
            onClick={() => setActivePage({ page: "AboutPage" })}
            className={
              activePage.page === "AboutPage" ? "ButtonActiveApod" : ""
            }
          >
            Sobre
          </Button>
        </ButtonsContent>
      </Container>
    </div>
  );
};

export default Sidebar;
