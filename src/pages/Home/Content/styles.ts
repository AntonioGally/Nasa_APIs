import styled from "styled-components";

export const Container = styled.div`
  max-width: 1100px;
  margin: 10% auto;
  @media (max-width: 600px) {
    margin: 20% auto;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1100px) {
    flex-direction: column;
  }
  &.FourItems {
    margin-top: 10%;
    margin-bottom: 10%;

    @media (max-width: 1100px) {
      width: 500px;
      height: 350px;
      @media (max-width: 600px) {
        width: 300px;
        height: 200px;
      }
      margin: 10% auto;
      overflow-x: auto;
      display: flex;
      flex-direction: row;
      justify-content: unset;
    }
  }
`;
export const BigSquare = styled.div`
  width: 500px;
  height: 350px;
  position: relative;
  @media (max-width: 600px) {
    width: 300px;
    height: 200px;
  }
  margin-right: 30px;
  @media (max-width: 1100px) {
    margin: 0 0 15px 0;
  }
  border-radius: 10px;
`;
export const CardsContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  &.FirsColumnCardsContent {
    margin: 0 30px 0 0;
    @media (max-width: 1100px) {
      margin: 0;
    }
  }
  @media (max-width: 1100px) {
    margin: 15px 0 0 0;
  }
  &.CellPhone {
    @media (max-width: 1100px) {
      display: flex;
      flex-direction: row;
      margin: 0;
    }
  }
`;
export const Cards = styled.div`
  width: 500px;
  height: 165px;
  position: relative;
  @media (min-width: 1101px) {
    :nth-child(1) {
      margin-bottom: 20px;
    }
  }
  @media (max-width: 600px) {
    width: 300px;
    height: 85px;
  }

  &.CellPhoneCard {
    @media (max-width: 1100px) {
      width: 500px;
      height: 350px;
      @media (max-width: 600px) {
        width: 300px;
        height: 200px;
      }
    }
  }
  background: #c4c4c4;
  border-radius: 10px;
`;

export const InformationContent = styled.div`
  &.BigSquareVersion {
    height: 40%;
    width: 100%;
    position: absolute;
    border-radius: 0 0 10px 10px;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
  }
  &.CardVersion {
    height: 100%;
    width: 55%;
    position: absolute;
    border-radius: 0 10px 10px 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
  }
`;
export const Title = styled.div`
  @media (max-width: 600px) {
    font-size: 12px;
    margin: 5px 5px;
  }
  font-family: "IBM Plex Mono";
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  margin: 15px 10px 5px;
  color: white;
`;
export const Text = styled.div`
  @media (max-width: 600px) {
    font-size: 11px;
    margin: 5px 5px;
  }
  font-family: "IBM Plex Mono";
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 21px;
  margin-left: 10px;
  color: white;
`;
