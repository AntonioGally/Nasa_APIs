import React from "react";

import foto1 from "../../../assets/foto1.jpg";
import foto2 from "../../../assets/foto2.jpg";
import foto3 from "../../../assets/foto3.jpg";

import foto4 from "../../../assets/foto4.png";
import foto5 from "../../../assets/foto5.jpg";
import foto6 from "../../../assets/foto6.png";
import foto7 from "../../../assets/foto7.jpg";

import foto8 from "../../../assets/foto8.jpg";
import foto9 from "../../../assets/foto9.jpg";
import foto10 from "../../../assets/foto10.jpg";

import {
  Container,
  ContentContainer,
  BigSquare,
  CardsContent,
  Cards,
  InformationContent,
  Title,
  Text,
} from "./styles";

const Content: React.FC = () => {
  return (
    <>
      <Container>
        <ContentContainer className="ThreeItems">
          <BigSquare
            style={{
              backgroundImage: `url(${foto1})`,
            }}
          >
            <InformationContent className="BigSquareVersion">
              <Title>APOD</Title>
              <Text>Astronomy picture of today</Text>
            </InformationContent>
          </BigSquare>
          <CardsContent>
            <Cards
              style={{
                marginBottom: "10px",
                backgroundPosition: "center",
                backgroundImage: `url(${foto2})`,
              }}
            >
              <InformationContent className="CardVersion">
                <Title>Asteroids - NeoWs</Title>
                <Text>Near object Web Service</Text>
              </InformationContent>
            </Cards>
            <Cards
              style={{
                marginTop: "10px",
                backgroundImage: `url(${foto3})`,
                backgroundSize: "cover",
                backgroundPosition: "center right",
              }}
            >
              <InformationContent className="CardVersion">
                <Title>DONKI</Title>
                <Text>
                  Space Weather Database Of Notifications, Knowledge,
                  Information
                </Text>
              </InformationContent>
            </Cards>
          </CardsContent>
        </ContentContainer>
        <ContentContainer className="FourItems">
          <CardsContent className="FirsColumnCardsContent CellPhone">
            <Cards
              className="CellPhoneCard"
              style={{
                backgroundImage: `url(${foto4})`,
                backgroundSize: "contain",
              }}
            >
              <InformationContent className="CardVersion">
                <Title>Earth</Title>
                <Text>
                  Unlock the significant public investiment in earth observation
                  data
                </Text>
              </InformationContent>
            </Cards>
            <Cards
              className="CellPhoneCard"
              style={{
                backgroundImage: `url(${foto5})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <InformationContent className="CardVersion">
                <Title>EONET</Title>
                <Text>The Earth Observatory Natural Event Tracker</Text>
              </InformationContent>
            </Cards>
          </CardsContent>
          <CardsContent className="CellPhone">
            <Cards
              className="CellPhoneCard"
              style={{
                backgroundImage: `url(${foto6})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <InformationContent className="CardVersion">
                <Title>EPIC</Title>
                <Text>Earth Polychromatic Imaging Camera</Text>
              </InformationContent>
            </Cards>
            <Cards
              className="CellPhoneCard"
              style={{
                backgroundImage: `url(${foto7})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <InformationContent className="CardVersion">
                <Title>Exoplanet</Title>
                <Text>
                  Programmatic access to NASA's Exoplanet Archive database
                </Text>
              </InformationContent>
            </Cards>
          </CardsContent>
        </ContentContainer>

        <ContentContainer className="ThreeItems">
          <BigSquare
            style={{
              backgroundImage: `url(${foto8})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <InformationContent className="BigSquareVersion">
              <Title>NASA Image and Video Library</Title>
              <Text>
                API to access the NASA image and Video Library site at
                images.nasa.gov
              </Text>
            </InformationContent>
          </BigSquare>
          <CardsContent>
            <Cards
              style={{
                marginBottom: "10px",
                backgroundPosition: "center",
                backgroundSize: "conver",
                backgroundImage: `url(${foto9})`,
              }}
            >
              <InformationContent className="CardVersion">
                <Title>Insight</Title>
                <Text>Mars Weather Service API</Text>
              </InformationContent>
            </Cards>
            <Cards
              style={{
                marginTop: "10px",
                backgroundImage: `url(${foto10})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <InformationContent className="CardVersion">
                <Title>Mars Rover Photos</Title>
                <Text>
                  Image data gathered by NASA's Curiosity, Oportunity , and
                  Spirit rovers on Mars.
                </Text>
              </InformationContent>
            </Cards>
          </CardsContent>
        </ContentContainer>
      </Container>
    </>
  );
};

export default Content;
