import styled from "styled-components";

export const Container = styled.div`
  max-width: 1100px;
  margin: 5% auto;
  @media (max-width: 600px) {
    margin: 15% auto;
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
  }
`;
export const BigSquare = styled.div`
  width: 500px;
  height: 350px;
  @media (max-width: 600px) {
    width: 300px;
    height: 200px;
  }
  background: pink;
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
`;
export const Cards = styled.div`
  width: 500px;
  height: 165px;
  @media (max-width: 600px) {
    width: 300px;
    height: 85px;
  }
  background: pink;
  border-radius: 10px;
`;
