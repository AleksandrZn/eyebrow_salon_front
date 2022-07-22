import React, { useEffect } from "react";
import { PageHeader, Button } from "antd";
import {
  APPOINTMENT_ROUTE,
  AUTH_ROUTE,
  COURSES_ROUTE,
  MAIN_ROUTE,
} from "../utils/consts";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  useEffect((navigate) => {
    console.log(window.history.state);
  });

  return (
    <PageHeader
      className="site-page-header"
      onBack={() => navigate(-1)}
      title="Alexandra brows"
      subTitle="This is a subtitle"
      extra={[
        <Button onClick={() => navigate(MAIN_ROUTE)} key="1">
          Главная
        </Button>,
        <Button onClick={() => navigate(COURSES_ROUTE)} key="2">
          Курсы
        </Button>,
        <Button onClick={() => navigate(APPOINTMENT_ROUTE)} key="3">
          Запись
        </Button>,
        <Button onClick={() => navigate(AUTH_ROUTE)} key="4">
          Войти
        </Button>,
      ]}
    />
  );
};

export default NavBar;
