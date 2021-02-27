import React from "react";
import { Container, ButtonsContent, Button } from "./styles";
import { useApodContex } from "../../../../context/ApodContext";

import { Redirect } from "react-router-dom";

const Sidebar: React.FC = () => {
  const { activePage, setActivePage } = useApodContex();
  const [back, setBack] = React.useState(false);
  if (back) {
    return <Redirect to="/" />;
  }
  return (
    <>
      <Container>
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
