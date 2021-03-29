import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: calc(100% - 300px);
  margin-left: 25%;

  @media (max-width: 1100px) {
    margin: auto;
    max-width: 95%;
    padding-right: 0px !important;
  }
  max-height: 100vh;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 1500px) {
    padding-right: 20px;
  }
`;

export const TextContainer = styled.div`
  background-color: rgba(18, 32, 47, 1);
  border-radius: 8px;
  padding: 20px 12px;
  max-width: 1100px;
  margin: 10% 20px;
`;
