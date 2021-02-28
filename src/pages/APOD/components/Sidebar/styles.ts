import styled from "styled-components";
import { Menu } from "@styled-icons/entypo/Menu";
import { CloseOutline } from "@styled-icons/evaicons-outline/CloseOutline";

export const SvgToggle = styled(Menu)`
  display: none;
  @media (max-width: 1100px) {
    display: unset;
    cursor: pointer;
    width: 50px;
    height: 50px;
    color: white;
    fill: white;
    padding: 5px;
    position: absolute;
    z-index: 10000;
  }
`;
export const SvgToggleClose = styled(CloseOutline)`
  display: none;
  @media (max-width: 1100px) {
    display: unset;
    cursor: pointer;
    width: 50px;
    height: 50px;
    color: var(--background);
    fill: var(--background);
  }
`;
export const Container = styled.div`
  transition: margin 0.5s ease;
  width: 300px;
  height: 100vh;
  background-color: var(--secundary);
  display: flex;
  flex-direction: column;
  position: fixed;
  @media (max-width: 1100px) {
    margin-left: -300px;
    transition: margin 0.5s ease;
    &.openToggle {
      margin-left: 0;
      transition: margin 0.5s ease;
    }
  }
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
  width: 250px;
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
