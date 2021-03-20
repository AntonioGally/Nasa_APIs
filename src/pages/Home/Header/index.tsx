import React from "react";

import { Container, Button, LinkedinIcon, GithubIcon } from "./styles";

const Header: React.FC = () => {
  return (
    <>
      <Container>
        <a
          href="https://www.linkedin.com/in/antônio-gally-089bab180/"
          target="_blank"
          rel="noreferrer"
        >
          <Button>
            <LinkedinIcon />
            <span>linkedin</span>
          </Button>
        </a>
        <a
          href="https://github.com/AntonioGally/Nasa_APIs"
          target="_blank"
          rel="noreferrer"
        >
          <Button>
            <GithubIcon />
            <span>github</span>
          </Button>
        </a>
      </Container>
    </>
  );
};

export default Header;
