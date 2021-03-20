import styled from "styled-components";
import { LinkedinSquare } from "@styled-icons/boxicons-logos/LinkedinSquare";
import { Github } from "@styled-icons/bootstrap/Github";

export const Container = styled.div`
  padding-top: 56px;
  padding-right: 130px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 800px) {
    padding-top: 30px;
    padding-right: 0px;
    justify-content: center;
    flex-direction: column;
  }
`;

export const Button = styled.div`
  padding: 10px 28px;
  cursor: pointer;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  margin-right: 20px;
  > span {
    color: #242424;
    font-family: "Sora";
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 150%;
  }
  @media (max-width: 800px) {
    margin-right: 0;
    margin-bottom: 20px;
    padding: 4px 20px;
  } ;
`;
export const LinkedinIcon = styled(LinkedinSquare)`
  width: 30px;
  height: 30px;
  cursor: pointer;
  fill: #242424;
  margin-right: 10px;
`;
export const GithubIcon = styled(Github)`
  width: 30px;
  height: 30px;
  cursor: pointer;
  fill: #242424;
  margin-right: 10px;
`;
