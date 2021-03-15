import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: calc(100% - 300px);
  margin-left: 25%;
  @media (max-width: 1100px) {
    margin: auto;
    max-width: 85%;
  }
`;

export const TextContent = styled.div`
  padding: 10px;
  margin: 5% 0 0 3%;
  max-width: 1100px;
`;
export const Title = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: white;
  margin-bottom: 30px;
  @media (max-width: 1500px) {
    font-size: 22px;
  }
`;
export const Text = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 36px;
  color: white;
  text-align: justify;
  padding-right: 5px;
  @media (max-width: 1500px) {
    font-size: 15px;
  }
`;
export const ImageContent = styled.div`
  margin: 0 auto 0;
  text-align: center;
`;
export const MyImage = styled.img`
  margin-top: 5%;
  margin-bottom: 2%;
  border-radius: 5px;
  max-width: 1100px;
  margin-left: 3%;
  @media (max-width: 1500px) {
    margin-top: 0;
    width: 70%;
    margin-left: 0;
    padding: 20px;
    margin: auto;
  }
  @media (max-width: 1100px) {
    width: 100%;
    padding: 0;
  }
`;
export const VideoContent = styled.div`
  margin-top: 5%;
  margin-bottom: 2%;
  border-radius: 5px;
  width: 1000px;
  @media (max-width: 1500px) {
    margin-top: 0;
    width: 500px;
    margin-left: 0;
    padding: 20px;
    margin: auto;
  }
  @media (max-width: 520px) {
    width: 300px;
    padding: 0;
  }
`;
export const MyVideo = styled.iframe`
  width: 100%;
  min-height: 800px;
  @media (max-width: 1500px) {
    min-height: 600px;
  }
  @media (max-width: 520px) {
    min-height: 300px;
  }
`;
