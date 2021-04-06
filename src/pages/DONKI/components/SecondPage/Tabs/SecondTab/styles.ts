import styled from "styled-components";
import { RightArrowAlt } from "@styled-icons/boxicons-regular/RightArrowAlt";
export const Container = styled.div`
  margin-top: 5%;
  width: 100%;
  overflow-x: auto;
`;
export const FormContent = styled.form`
  padding: 10px;
  margin: 0 0 3% 0;
  @media (max-width: 600px) {
    margin: 10% 0 5% 0;
  }
  max-width: 1100px;
  > div {
    :nth-child(2) {
      margin-top: 2%;
    }
    :nth-child(3) {
      display: flex;
      flex-direction: column;
      margin-top: 2%;
    }
  }

  > div > div {
    > select {
      background-color: var(--secundary);
      font-family: "Poppins";
      font-style: normal;
      max-width: 250px;
      margin-left: 10px;
      font-weight: 400;
      font-size: 18px;
      line-height: 36px;
      color: black;
      @media (max-width: 768px) {
        font-size: 14px;
        line-height: inherit;
        margin-bottom: 10px;
      }
    }
    display: flex;
  }
`;

export const MyButton = styled.button`
  background: none;
  border: none;
  outline: 0;
  margin-left: 15px;
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
export const InformationContent = styled.div`
  width: 100%;
  margin-top: 2%;
`;
