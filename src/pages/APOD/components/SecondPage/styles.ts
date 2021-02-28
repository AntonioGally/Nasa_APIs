import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: calc(100% - 300px);
  margin-left: 25%;
  @media (max-width: 1100px) {
    margin: auto;
    max-width: 85%;
  }
`;
export const MyNavBar = styled.div`
  > nav {
    padding: 15px;
    background-color: var(--secundary);
    > div {
      justify-content: flex-start;
    }
    justify-content: flex-end;
    @media (min-width: 1100px) {
      width: calc(100% - 300px);
      margin-left: 300px;
    }
  }
`;

export const MyLink = styled.div`
  margin-right: 20px;
  @media (max-width: 1200px) {
    margin-bottom: 15px;
  }
  justify-content: center;
  display: flex;
  > span {
    cursor: pointer;
    width: max-content;
    font-family: "Poppins";
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 27px;
    color: black !important;

    position: relative;
    &.ActiveSpanSecondPage {
      ::after {
        position: absolute;
        width: calc(100% - 20px);
        left: 10px;
        bottom: -9px;
        content: "";
        height: 5px;
        border-radius: 5px;
        background-color: var(--background);
      }
    }
  }
`;
