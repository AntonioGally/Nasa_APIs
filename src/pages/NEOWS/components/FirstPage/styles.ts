import styled from "styled-components";
import { RightArrowAlt } from "@styled-icons/boxicons-regular/RightArrowAlt";
import { Shuffle } from "@styled-icons/entypo/Shuffle";

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
  margin-bottom: 16px;
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
export const ShuffleIcon = styled(Shuffle)`
  width: 30px;
  height: 30px;
  color: white;
  margin-left: 30px;
  cursor: pointer;
  flex-shrink: 0;
`;
export const ContentChart = styled.div`
  max-width: 1100px;
  background-color: var(--background2);
  border-radius: 10px;
  margin-bottom: 5%;
  @media (max-width: 1500px) {
    width: 100%;
  }
`;
export const MyButton = styled.div`
  :hover {
    background-color: #aabaff;
    transition: background 0.8s ease;
  }
  font-family: "IBM Plex Mono";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 23px;
  color: black;
  padding: 15px 25px;
  width: 250px;
  text-align: center;
  border-radius: 8px;
  margin-bottom: 32px;
  background-color: #c4c4c4;
  cursor: pointer;
`;
