import React, { useContext } from "react";

import { StyledHamburger } from "./index.styled";
import { Context } from "../..";
import { observer } from "mobx-react-lite";

const Hamburger = observer(() => {
  const { global } = useContext(Context);

  return (
    <div
      onClick={() => {
        console.log(global.isOpenBurger);
        return global.setIsOpenBurger(!global.isOpenBurger);
      }}
      w
      style={{ marginRight: "25px" }}
    >
      <StyledHamburger open={global.isOpenBurger}>
        <div />
        <div />
        <div />
      </StyledHamburger>
    </div>
  );
});

export default Hamburger;
