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
            onClick={() => setActivePage("FirstPage")}
            className={activePage === "FirstPage" ? "ButtonActiveApod" : ""}
          >
            Foto do dia
          </Button>
          <Button
            onClick={() => setActivePage("SecondPage")}
            className={activePage === "SecondPage" ? "ButtonActiveApod" : ""}
          >
            Fotos específicas
          </Button>
          <Button
            onClick={() => setActivePage("ThirdPage")}
            className={activePage === "ThirdPage" ? "ButtonActiveApod" : ""}
          >
            Fotos aleatórias
          </Button>
        </ButtonsContent>
      </Container>
    </>
  );
};

export default Sidebar;
