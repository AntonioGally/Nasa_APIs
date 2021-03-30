import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-bottom: 15%;
`;
export const MyCard = styled.div`
  border: 1px solid white;
  border-radius: 4px;
  position: relative;
  min-height: 300px;
  @media (max-width: 600px) {
    margin-bottom: 10%;
  }
  transition: all ease-in-out 0.4s;
  > div {
    transition: all ease-in-out 0.4s;
    > div {
      transition: all ease-in-out 0.4s;
    }
  }
  :hover {
    box-shadow: inset 0 30em 1em rgba(0, 0, 0, 0.2);
    transition: all ease-in-out 0.2s;
    > div {
      background: #000000;
      border: 1px solid #ffffff;
      > div {
        color: white;
      }
    }
  }
`;
export const TextContent = styled.div`
  position: absolute;
  z-index: 100;
  width: 80%;
  left: 10%;
  bottom: -14%;
  background-color: white;
  border-radius: 4px;
  padding: 16px;
`;
export const Title = styled.div`
  font-family: "Sora";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 150%;
  color: #242424;
`;
export const Text = styled.div`
  font-family: "Sora";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  color: #323232;
`;
