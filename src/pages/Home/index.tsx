import React from "react";
import Content from "./Content";
import NavBar from "../../GlobalComponents/NavBar";

const Home: React.FC = () => {
  return (
    <>
      <NavBar />
      <Content />
      {/* <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          position: "absolute",
          top: 0,
          zIndex: -20,
        }}
      >
        {list.map((i, index) => (
          <span
            style={{
              fontSize: "20px",
              color: "white",
              margin: `${auxMargin}px`,
              transition: "margin ease 3s",
            }}
          >
            .
          </span>
        ))}
      </div> */}
    </>
  );
};

export default Home;
