import styled from "styled-components";
import { CloseOutline } from "@styled-icons/evaicons-outline/CloseOutline";
export const CloseIcon = styled(CloseOutline)`
  width: 30px;
  height: 30px;
  color: white;
  fill: white;
  cursor: pointer;
  flex-shrink: 0;
`;

export const AsteroidName = styled.a`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 30px;
  text-decoration: underline;
  color: #fff;
  margin: 0;
`;
export const MyDate = styled.h1`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 30px;
  color: #fff;
  margin: 0;
  margin-left: 5px;
  @media (max-width: 900px) {
    margin: 0;
    margin-left: 10px;
  }
`;
export const TextContent = styled.div`
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
export const Info = styled.h2`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 24px;
  color: #fff;
  margin-bottom: 50px;
  @media (max-width: 900px) {
    margin-bottom: 10%;
    line-height: unset;
  }
  &.idModalInformation {
    text-decoration: underline;
    cursor: pointer;
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
