import styled from "styled-components";

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

export const TextContainer = styled.div`
  background-color: rgba(18, 32, 47, 1);
  border-radius: 8px;
  padding: 20px 12px;
  max-width: 1100px;
  margin: 10% 20px;
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
  > a {
    color: white;
    text-decoration: underline;
  }
  font-family: "Poppins";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  padding: 0 20px;
  margin-bottom: 30px;
  color: white;
  @media (max-width: 768px) {
    font-size: 13px;
    line-height: inherit;
    padding: 0;
  }
`;
export const ImageContent = styled.div`
  display: flex;
  @media (max-width: 1100px) {
    flex-direction: column;
  }
  justify-content: center;
`;
export const MyImage = styled.img`
  width: 48%;
  border-radius: 5px;
  border: 1px solid #707070;

  @media (max-width: 1500px) {
    margin-top: 0;
    width: 50%;
    margin-left: 0;
    padding: 20px;
    margin: auto;
  }
  @media (max-width: 1100px) {
    width: 100%;
    padding: 0;
    margin-bottom: 20px;
  }
`;
export const Code = styled.div`
  max-width: 100%;
  white-space: nowrap;
  overflow-x: auto;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  @media (max-width: 768px) {
    font-size: 12px;
  }
  font-size: 15px;
  border-radius: 8px;
  color: black;
  padding: 5px;
  width: max-content;
  background-color: rgba(255, 255, 255, 0.8);
`;
