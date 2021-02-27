import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  height: 100vh;
  background-color: var(--secundary);
  display: flex;
  flex-direction: column;
  > span {
    width: max-content;
    text-decoration: underline;
    cursor: pointer;
    font-family: "IBM Plex Mono";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 23px;
    margin: 30px 0 0 30px;
    color: black;
  }
`;
export const ButtonsContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 200px;
  margin-left: 20px;
`;
export const Button = styled.div`
  font-family: "IBM Plex Mono";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 23px;
  color: black;
  padding: 15px 25px;
  width: 200px;
  text-align: center;
  border-radius: 8px;
  margin-bottom: 32px;
  background-color: #c4c4c4;
  cursor: pointer;
  &.ButtonActiveApod {
    background-color: var(--background);
    color: white;
    transition: background 0.5s ease;
  }
`;
