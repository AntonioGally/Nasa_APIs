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

export const Container = styled.div`
  margin-top: 5%;
  width: 100%;
  overflow-x: auto;
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
export const ChartContent = styled.div`
  max-width: 1100px;
  background-color: var(--background2);
  border-radius: 10px;
  margin-bottom: 5%;
  @media (max-width: 1500px) {
    width: 100%;
  }
`;
export const ExplainText = styled.div`
  padding-right: 20px;

  > ul > li {
    @media (max-width: 768px) {
      font-size: 14px;
      line-height: 24px;
    }
    font-family: "Poppins";
    font-style: normal;
    font-weight: normal;
    font-size: 19px;
    line-height: 40px;
    color: white;
    > span {
      color: pink;
      font-weight: 600;
    }
  }
`;
