import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Scrollbar from "smooth-scrollbar";
import { Button } from "./index.styled";

const DefaultBtn = ({ name, path }) => {
  const [touch, setTouch] = useState(false);
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();
  const handleClick = (path) => {
    Scrollbar.get(document.body).setPosition(0, 0);
    navigate(path);
  };
  return (
    <Button
      onClick={() => handleClick(path)}
      onTouchEnd={() => setTouch(false)}
      onTouchStart={() => setTouch(true)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      active={window.location.pathname === path}
      touch={touch}
      hover={hover}
    >
      {name}
    </Button>
  );
};

export default DefaultBtn;
