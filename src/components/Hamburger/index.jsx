import React, { useContext } from "react";

import { observer } from "mobx-react-lite";
import { Context } from "../..";
import { StyledHamburger } from "./index.styled";

const Hamburger = observer(() => {
  const { global } = useContext(Context);

  return (
    <div
      onClick={() => global.setIsOpenBurger(!global.isOpenBurger)}
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
