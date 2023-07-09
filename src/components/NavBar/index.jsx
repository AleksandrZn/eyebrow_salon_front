import { observer } from "mobx-react-lite";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  APPOINTMENT_ROUTE,
  COURSES_ROUTE,
  MAIN_ROUTE,
} from "../../utils/consts";
import NavBtn from "../Buttons/NavBtn";
import { Img } from "../Img";
import { Menu } from "../Menu";
import { Header, NavButtWrapper } from "./index.styled";
import Scrollbar from "smooth-scrollbar";
import { header } from "../../utils/data";

export const NavBar = observer(() => {
  const navigate = useNavigate();

  return (
    <>
      <Header id="header">
        <Img
          width={"calc(173px + (203 - 173) * ((100vw - 280px) / (1920 - 280)))"}
          widthMedia={
            "calc(173px + (203 - 173) * ((100vw - 280px) / (1920 - 280)))"
          }
          src={header.src}
          onClick={() => {
            navigate(MAIN_ROUTE);
            Scrollbar.get(document.body).setPosition(0, 0);
          }}
        />
        <NavButtWrapper>
          <NavBtn name="Курсы" path={COURSES_ROUTE} />
          <NavBtn
            style={{ marginRight: "0" }}
            name="Запись"
            path={APPOINTMENT_ROUTE}
          />
          <Menu />
        </NavButtWrapper>
      </Header>
    </>
  );
});
