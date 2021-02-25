import React from "react";

import {
  Container,
  ContentContainer,
  BigSquare,
  CardsContent,
  Cards,
} from "./styles";

const Content: React.FC = () => {
  return (
    <>
      <Container>
        <ContentContainer className="ThreeItems">
          <BigSquare></BigSquare>
          <CardsContent>
            <Cards style={{ marginBottom: "10px" }}></Cards>
            <Cards style={{ marginTop: "10px" }}></Cards>
          </CardsContent>
        </ContentContainer>
        <ContentContainer className="FourItems">
          <CardsContent className="FirsColumnCardsContent">
            <Cards style={{ marginBottom: "10px" }}></Cards>
            <Cards style={{ marginTop: "10px" }}></Cards>
          </CardsContent>
          <CardsContent>
            <Cards style={{ marginBottom: "10px" }}></Cards>
            <Cards style={{ marginTop: "10px" }}></Cards>
          </CardsContent>
        </ContentContainer>
        <ContentContainer className="ThreeItems">
          <BigSquare></BigSquare>
          <CardsContent>
            <Cards style={{ marginBottom: "10px" }}></Cards>
            <Cards style={{ marginTop: "10px" }}></Cards>
          </CardsContent>
        </ContentContainer>
        <ContentContainer className="FourItems">
          <CardsContent className="FirsColumnCardsContent">
            <Cards style={{ marginBottom: "10px" }}></Cards>
            <Cards style={{ marginTop: "10px" }}></Cards>
          </CardsContent>
          <CardsContent>
            <Cards style={{ marginBottom: "10px" }}></Cards>
            <Cards style={{ marginTop: "10px" }}></Cards>
          </CardsContent>
        </ContentContainer>
      </Container>
    </>
  );
};

export default Content;
