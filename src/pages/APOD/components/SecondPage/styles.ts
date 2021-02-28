import styled from "styled-components";
import { RightArrowAlt } from "@styled-icons/boxicons-regular/RightArrowAlt";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: calc(100% - 300px);
  margin-left: 25%;
  @media (max-width: 1100px) {
    margin: auto;
    max-width: 85%;
  }
`;
export const MyNavBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  > nav {
    position: fixed;
    padding: 15px;
    background-color: var(--secundary);
    justify-content: flex-end;
    @media (max-width: 1099px) {
      border-radius: 8px;
    }
    @media (min-width: 1100px) {
      width: calc(100% - 300px);
      margin-left: 300px;
    }
    > div {
      justify-content: flex-start;
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

export const FormContent = styled.form`
  padding: 10px;
  margin: 10% 0 3% 3%;
  @media (max-width: 600px) {
    margin: 40% 0 5% 3%;
  }
  max-width: 1100px;
  > div {
    display: flex;
    flex-direction: column;
    margin-top: 2%;
  }
  > div > div > button {
    background: none;
    border: none;
    outline: 0;
  }
`;

export const Title = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: white;
`;
export const MyInput = styled.input`
  width: 250px;
  height: 40px;
  margin-left: 10px;
  border-radius: 8px;
  background-color: var(--secundary);
`;
export const ImageContent = styled.div`
  text-align: center;
  max-width: 1100px;
  margin: 3% 20px;
  > div > div {
    z-index: -10;
  }
`;
export const ArrowIcon = styled(RightArrowAlt)`
  width: 40px;
  height: 40px;
  color: white;
  margin-left: 10px;
  cursor: pointer;
  flex-shrink: 0;
`;

export const MyImage = styled.img`
  max-width: 1000px;
  border-radius: 5px;
  @media (max-width: 1500px) {
    margin-top: 0;
    width: 70%;
    margin-left: 0;
    padding: 20px;
    margin: auto;
  }
  @media (max-width: 1100px) {
    width: 100%;
    padding: 0;
  }
`;
export const TextContent = styled.div`
  max-width: 1100px;
  padding: 10px;
`;
export const TitleCarousel = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: white;
`;
export const Text = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 36px;
  color: white;
  text-align: justify;
`;
