import React from "react";
import { Wrapper } from "./index.styled";
import { Img } from "../Img";

export const Stub = () => {
  return (
    <Wrapper>
      <Img
        width={"calc(173px + (203 - 173) * ((100vw - 280px) / (1920 - 280)))"}
        widthMedia={
          "calc(173px + (203 - 173) * ((100vw - 280px) / (1920 - 280)))"
        }
        src="http://localhost:5000/logo.svg"
      />
      <div
        style={{
          display: "inline-block",
          fontFamily: "Inter",
          fontSize: "calc(15px + (30 - 15) * ((100vw - 390px) / (1920 - 390)))",
        }}
      >
        На сайте ведутся технические работы
      </div>
    </Wrapper>
  );
};
