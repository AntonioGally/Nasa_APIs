import styled from "styled-components";

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
  > span {
    cursor: pointer;
    text-decoration: underline;
  }
`;
export const TextArea = styled.textarea`
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 24px;
  }
  margin-top: 5%;
  width: 100%;
  min-height: 500px;
  background-color: transparent;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 32px;
  border: 1px solid var(--secundary);
  border-radius: 8px;
  padding: 12px;
  color: white;
  ::-webkit-scrollbar {
    width: 10px;
    height: 13px;
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.6);
    border-radius: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #ffffff;
    border-radius: 8px;
    box-shadow: inset 7px 10px 12px #f0f0f0;
  }
`;
