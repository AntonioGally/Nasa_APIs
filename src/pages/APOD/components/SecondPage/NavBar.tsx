import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { MyNavBar, MyLink } from "./styles";
const SecondPage: React.FC = () => {
  const [auxLink, setAuxLink] = useState("primeiro_link");
  return (
    <>
      <MyNavBar>
        <Navbar expand="xl">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <MyLink>
                <span
                  onClick={() => setAuxLink("primeiro_link")}
                  className={
                    auxLink === "primeiro_link" ? "ActiveSpanSecondPage" : ""
                  }
                >
                  Intervalo de datas
                </span>
              </MyLink>
              <MyLink>
                <span
                  onClick={() => setAuxLink("segundo_link")}
                  className={
                    auxLink === "segundo_link" ? "ActiveSpanSecondPage" : ""
                  }
                >
                  Única data
                </span>
              </MyLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </MyNavBar>
    </>
  );
};

export default SecondPage;
