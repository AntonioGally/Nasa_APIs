import styled from "styled-components";
import { RightArrowAlt } from "@styled-icons/boxicons-regular/RightArrowAlt";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: calc(100% - 300px);
  margin-left: 25%;
  @media (max-width: 1100px) {
    margin: auto;
    max-width: 95%;
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

export const TextContainer = styled.div`
  background-color: rgba(18, 32, 47, 1);
  border-radius: 8px;
  padding: 20px 12px;
  max-width: 1100px;
  margin: 5% 20px;
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
  &.AboutExempleText {
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
  }
`;
export const Text = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  padding: 0 20px;
  margin-bottom: 30px;
  color: white;
  text-align: justify;
  @media (max-width: 768px) {
    font-size: 13px;
    line-height: inherit;
    padding: 0;
  }
`;
export const SliderContent = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  margin: auto;
  > span > span {
    &.MuiSlider-rail {
      height: 6px;
      opacity: 0.6;
      border-radius: 5px;
    }
    &.MuiSlider-track {
      height: 6px;
    }
    &.MuiSlider-markLabel {
      display: none;
    }
  }
`;

export const TextContent = styled.div`
  margin-top: 2%;
`;
export const TextGrid = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 80%;
  margin: 0 auto;
  @media (max-width: 700px) {
    padding-bottom: 50px;
  }
`;
export const Info = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
  color: #fff;
  margin-bottom: 30px;
  @media (max-width: 900px) {
    margin-bottom: 10%;
    font-size: 18px;
    line-height: unset;
  }
`;
export const LittleText = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
  color: white;
`;
export const MyImage = styled.img`
  width: 50%;
  @media (min-width: 1500px) {
    width: 60%;
  }
  @media (max-width: 700px) {
    width: 100%;
  }
`;
