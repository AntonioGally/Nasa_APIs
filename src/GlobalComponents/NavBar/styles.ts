import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: var(--secundary);
  padding: 25px 0;
  > span {
    font-family: "IBM Plex Mono";
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 16px;
    margin-left: 10%;
    cursor: pointer;
  }
`;
