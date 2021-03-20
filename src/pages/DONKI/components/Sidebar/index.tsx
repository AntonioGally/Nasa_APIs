import React from "react";
import {
  Container,
  ButtonsContent,
  Button,
  SvgToggle,
  SvgToggleClose,
} from "./styles";
import { useDonkiContext } from "../../../../context/DonkiContext";

import { Redirect } from "react-router-dom";

const Sidebar: React.FC = () => {
  const { activePage, setActivePage } = useDonkiContext();
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
            onClick={() => setActivePage("FirstPage")}
            className={activePage === "FirstPage" ? "ButtonActiveApod" : ""}
          >
            FirstPage
          </Button>
          <Button
            onClick={() => setActivePage("SecondPage")}
            className={activePage === "SecondPage" ? "ButtonActiveApod" : ""}
          >
            Second Page
          </Button>
        </ButtonsContent>
      </Container>
    </div>
  );
};

export default Sidebar;
