import styled from "styled-components";
import { RightArrowAlt } from "@styled-icons/boxicons-regular/RightArrowAlt";

export const Container = styled.div`
  margin-top: 5%;
  width: 100%;
  overflow-x: auto;
`;

export const ExplainText = styled.div`
  padding-right: 20px;
  > ul > li {
    font-family: "Poppins";
    font-style: normal;
    font-weight: normal;
    font-size: 19px;
    @media (max-width: 768px) {
      font-size: 14px;
      line-height: 24px;
    }
    line-height: 40px;
    color: white;
    > span {
      color: pink;
      font-weight: 600;
    }
  }
`;

export const FormContent = styled.form`
  padding: 10px;
  margin: 0 0 3% 3%;
  @media (max-width: 600px) {
    margin: 10% 0 5% 3%;
  }
  max-width: 1100px;
  > div {
    :nth-child(2) {
      display: flex;
      flex-direction: column;
      margin-top: 2%;
    }
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
  margin-bottom: 16px;
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: inherit;
    margin-bottom: 10px;
  }
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
export const ChartContent = styled.div`
  max-width: 1100px;
  background-color: var(--background2);
  border-radius: 10px;
  margin-bottom: 5%;
  @media (max-width: 1500px) {
    width: 100%;
  }
`;
