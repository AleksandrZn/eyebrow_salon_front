import React, { useEffect, useState } from "react";
import {
  APPOINTMENT_ROUTE,
  AUTH_ROUTE,
  COURSES_ROUTE,
  MAIN_ROUTE,
} from "../../utils/consts";
import { useNavigate } from "react-router-dom";
import {
  AuthButtWrapper,
  Header,
  NavButtWrapper,
  Button,
} from "./index.styled";

export const NavBar = () => {
  const navigate = useNavigate();

  const [active, setActive] = useState({});

  useEffect(() => {
    setActive({
      courses: window.location.pathname === COURSES_ROUTE ? true : false,
      appoint: window.location.pathname === APPOINTMENT_ROUTE ? true : false,
      auth: window.location.pathname === AUTH_ROUTE ? true : false,
      main: window.location.pathname === MAIN_ROUTE ? true : false,
    });
  }, [window.location.pathname]);

  return (
    <Header>
      <img src="img/Logo.svg" onClick={() => navigate(MAIN_ROUTE)} />
      <NavButtWrapper>
        <Button onClick={() => navigate(COURSES_ROUTE)} active={active.courses}>
          Курсы
        </Button>
        <Button
          onClick={() => navigate(APPOINTMENT_ROUTE)}
          active={active.appoint}
        >
          Запись
        </Button>
      </NavButtWrapper>
      <AuthButtWrapper>
        <Button onClick={() => navigate(AUTH_ROUTE)} active={active.auth}>
          Войти
        </Button>
      </AuthButtWrapper>
    </Header>
  );
};
