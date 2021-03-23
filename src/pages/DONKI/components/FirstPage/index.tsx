import React from "react";
import particleOptions from "../../stars.json";
import Particles from "react-tsparticles";
import { Container, TextContainer } from "./styles";
import { Tabs, Tab } from "react-bootstrap";
import "./Tabs/styles.css";
import FirstTab from "./Tabs/FirstTab";
import SecondTab from "./Tabs/SecondTab";

const FirstPage: React.FC = () => {
  return (
    <div style={{ width: "100vw" }}>
      <Particles
        options={particleOptions as unknown}
        style={{ width: "100vw", zIndex: -1000, position: "absolute" }}
      />
      <Container>
        <TextContainer>
          <Tabs defaultActiveKey="FirstTab" id="uncontrolled-tab-example">
            <Tab eventKey="FirstTab" title="30 dias atrás" tabClassName="MyTab">
              <FirstTab />
            </Tab>
            <Tab
              eventKey="SecondTab"
              title="Data específica"
              tabClassName="MyTab"
            >
              <SecondTab />
            </Tab>
          </Tabs>
        </TextContainer>
      </Container>
    </div>
  );
};

export default FirstPage;
