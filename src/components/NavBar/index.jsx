import React, { useEffect, useState } from "react";
import {
  APPOINTMENT_ROUTE,
  COURSES_ROUTE,
  MAIN_ROUTE,
  MOBILE,
} from "../../utils/consts";
import { useNavigate } from "react-router-dom";
import { Header, NavButtWrapper, Btn } from "./index.styled";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "../.././index";
import { Menu } from "../Menu";
import Scrollbar from "smooth-scrollbar";
import { delay } from "../../utils/delay";

export const NavBar = observer(() => {
  const navigate = useNavigate();
  //const { basket } = useContext(Context);
  const [active, setActive] = useState({});
  const { global } = useContext(Context);

  useEffect(() => {
    setActive({
      courses: window.location.pathname === COURSES_ROUTE ? true : false,
      appoint: window.location.pathname === APPOINTMENT_ROUTE ? true : false,
      main: window.location.pathname === MAIN_ROUTE ? true : false,
    });
  }, [window.location.pathname]);

  const handleClick = (route) => {
    global.deviceType === MOBILE
      ? delay().then(() => {
          navigate(route);
        })
      : navigate(route);
    Scrollbar.get(document.body).setPosition(0, 0);
  };

  return (
    <>
      <Header id="header">
        <img src="img/Logo.svg" onClick={() => handleClick(MAIN_ROUTE)} />
        <NavButtWrapper>
          <Btn
            onClick={() => handleClick(COURSES_ROUTE)}
            active={active.courses}
            type={global.deviceType}
          >
            Курсы
          </Btn>
          <Btn
            style={{ marginRight: "0" }}
            onClick={() => handleClick(APPOINTMENT_ROUTE)}
            active={active.appoint}
            type={global.deviceType}
          >
            Запись
          </Btn>

          {/* {false && (
            <Badge count={basket.products.length}>
              <Button
                type="primary"
                icon={<DeleteOutlined />}
                onClick={() =>
                  basket.products.length > 0 && basket.setIsVisible(true)
                }
              />
            </Badge>
          )} */}
          <Menu
            handleClick={handleClick}
            type={global.deviceType}
            active={active}
          />
        </NavButtWrapper>
      </Header>
    </>
  );
});
