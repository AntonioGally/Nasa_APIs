import React from "react";
import Header from "./Header";
import FirstArticle from "./FirstArticle";
import Cards from "./Cards";
// import Content from "./Content";
// import NavBar from "../../GlobalComponents/NavBar";
import { Container } from "./styles";

const Home: React.FC = () => {
  return (
    <>
      <Container>
        <Header />
        <FirstArticle />
        <Cards />
      </Container>
    </>
  );
};

export default Home;
