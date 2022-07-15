import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes";
import { MAIN_ROUTE } from "../utils/consts";

const AppRouter = () => {
  const isAuth = true;
  return (
    <Routes>
      {isAuth &&
        authRoutes.map(({ path, Component }) => {
          console.log(path, Component);
          return <Route key={path} path={path} element={<Component />} exact />;
        })}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} exact />
      ))}
      <Route path="*" element={<Navigate to={MAIN_ROUTE} replace />} />
    </Routes>
  );
};

export default AppRouter;
