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
  max-height: 100vh;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
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
  @media (max-width: 768px) {
    font-size: 18px;
  }
  line-height: 36px;
  color: white;
`;
export const MyInput = styled.input`
  padding-left: 15px;
  width: 250px;
  height: 40px;
  margin-left: 10px;
  border-radius: 8px;
  background-color: var(--secundary);
`;

export const ArrowIcon = styled(RightArrowAlt)`
  width: 40px;
  height: 40px;
  color: white;
  margin-left: 10px;
  cursor: pointer;
  flex-shrink: 0;
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
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: inherit;
    margin-bottom: 10px;
  }
`;
export const Text = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  @media (max-width: 768px) {
    font-size: 13px;
    line-height: inherit;
  }
  line-height: 36px;
  color: white;
  text-align: justify;
  padding-right: 5px;
  @media (max-width: 1500px) {
    font-size: 15px;
  }
`;
export const ImageContent = styled.div`
  background-color: rgba(18, 32, 47, 1);
  border-radius: 8px;
  padding: 12px;
  text-align: center;
  max-width: 1100px;
  margin: 3% 20px;
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
