import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 20px;
`;

export const TitleContent = styled.div`
  max-width: 40%;
  margin-top: 5%;
  @media (max-width: 1400px) {
    width: 55%;
  }
  @media (max-width: 800px) {
    width: 100%;
  }
`;
export const FirstText = styled.div`
  font-family: "Rubik";
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  margin-bottom: 20px;
  @media (max-width: 600px) {
    font-size: 17px;
    margin-bottom: 10px;
  }
  line-height: 130%;
  color: #ffffff;
`;
export const GrandText = styled.div`
  font-family: "Sora";
  font-style: normal;
  font-weight: 600;
  font-size: 56px;
  @media (max-width: 600px) {
    font-size: 20px;
  }
  line-height: 130%;
  color: #ffffff;
`;

export const ArticleContent = styled.div`
  margin: 10% auto;
  width: 100%;
  @media (max-width: 800px) {
    margin: 20% auto;
  }
`;
export const TextArticle = styled.div`
  font-family: "Rubik";
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 130%;
  color: #ffffff;
  @media (max-width: 800px) {
    font-size: 15px;
  }
`;
