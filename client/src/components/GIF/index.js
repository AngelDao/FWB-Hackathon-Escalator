import React from "react";
import { Title, TitleContainer } from "./styles";

const GIF = ({ gif, title, width, height }) => {
  return (
    <div
      style={{
        width: "100%",
        // height:  100%,
        display: "flex",
        // justifyContent:  center,
        alignItems: "center",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
      <div
        style={{
          width: "200px",
          height: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "60px",
          position: "abosolute",
        }}
      >
        <div>
          <img style={{ width, height }} alt="gif" src={gif}></img>
        </div>
      </div>
    </div>
  );
};

export default GIF;
