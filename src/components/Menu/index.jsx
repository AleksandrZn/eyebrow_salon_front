import React, { useContext, useEffect } from "react";

import { observer } from "mobx-react-lite";
import Scrollbar from "smooth-scrollbar";
import { Context } from "../..";
import {
  APPOINTMENT_ROUTE,
  COURSES_ROUTE,
  MAIN_ROUTE,
} from "../../utils/consts";
import NavBtn from "../Buttons/NavBtn";
import Hamburger from "../Hamburger";
import { StyledLink, StyledMenu, Wrapper } from "./index.styled";

export const Menu = observer(() => {
  const { global } = useContext(Context);
  const close = () => {
    global.setIsOpenBurger(false);
  };

  useEffect(() => {
    if (global.isOpenBurger) {
      Scrollbar.get(document.body).updatePluginOptions("modal", { open: true });
    }
    if (!global.isOpenBurger && Scrollbar.has(document.body)) {
      Scrollbar.get(document.body).updatePluginOptions("modal", {
        open: false,
      });
    }
  }, [global.isOpenBurger]);

  return (
    <Wrapper>
      <StyledMenu open={global.isOpenBurger}>
        <StyledLink open={global.isOpenBurger} onClick={() => close()}>
          <NavBtn
            style={{ display: "flex" }}
            name="Главная"
            path={MAIN_ROUTE}
          />
          <NavBtn
            style={{ display: "flex" }}
            name="Курсы"
            path={COURSES_ROUTE}
          />
          <NavBtn
            style={{ display: "flex" }}
            name="Запись"
            path={APPOINTMENT_ROUTE}
          />
        </StyledLink>
      </StyledMenu>

      <Hamburger />
    </Wrapper>
  );
});
