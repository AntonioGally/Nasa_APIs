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
export const ArrowIcon = styled(RightArrowAlt)`
  width: 40px;
  height: 40px;
  color: white;
  margin-left: 10px;
  cursor: pointer;
  flex-shrink: 0;
`;
export const ContentChart = styled.div`
  width: 80%;
  background-color: pink;
  margin-bottom: 5%;
`;
