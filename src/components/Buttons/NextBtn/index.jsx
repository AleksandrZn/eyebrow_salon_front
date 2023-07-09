import React, { useState } from "react";
import Scrollbar from "smooth-scrollbar";
import { Btn } from "./index.styled";

const NextBtn = ({ Svg, id, black }) => {
  const [touch, setTouch] = useState(false);
  const [hover, setHover] = useState(false);

  const getOffsetToScroll = (id) => {
    const block = document.querySelector(id);
    const header = document.querySelector("#header");
    const offset =
      parseInt(
        window.getComputedStyle(block, null).getPropertyValue("padding-top")
      ) -
      parseInt(
        window.getComputedStyle(header, null).getPropertyValue("height")
      );
    return offset;
  };

  const handleClick = (id) => {
    Scrollbar.get(document.body).scrollIntoView(document.querySelector(id), {
      offsetLeft: 0,
      offsetTop: -getOffsetToScroll(id),
      alignToTop: true,
      onlyScrollIfNeeded: false,
    });
  };

  return (
    <Btn touch={touch} hover={hover} black={black}>
      <Svg
        onTouchEnd={() => setTouch(false)}
        onTouchStart={() => setTouch(true)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => {
          setTouch(false);
          setHover(false);
          return handleClick(id);
        }}
      />
    </Btn>
  );
};

export default NextBtn;
