import styled from "styled-components";

export const Container = styled.div`
  margin-top: 5%;
  width: 100%;
  overflow-x: auto;
`;
export const FormContent = styled.div`
  > div > select {
    background-color: var(--secundary);
    font-family: "Poppins";
    font-style: normal;
    max-width: 300px;
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
`;
export const Title = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  margin-bottom: 20px;
  color: white;
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: inherit;
    margin-bottom: 10px;
  }
`;
export const InformationContent = styled.div`
  width: 100%;
  margin-top: 2%;
`;
