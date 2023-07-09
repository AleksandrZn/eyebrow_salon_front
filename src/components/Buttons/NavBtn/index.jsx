import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Scrollbar from "smooth-scrollbar";
import { Btn } from "./index.styled";

const NavBtn = ({ name, path, style }) => {
  const [touch, setTouch] = useState(false);
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();
  const handleClick = (path) => {
    Scrollbar.get(document.body).setPosition(0, 0);
    navigate(path);
  };
  return (
    <Btn
      style={style}
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
    </Btn>
  );
};

export default NavBtn;
