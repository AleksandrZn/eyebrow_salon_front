import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Context } from "..";
import { authRoutes, publicRoutes } from "../routes";
import { MAIN_ROUTE } from "../utils/consts";
import { AnimatePresence } from "framer-motion/dist/framer-motion";

const AppRouter = () => {
  const { user } = useContext(Context);
  console.log(user.id);
  return (
    <Routes>
      {user.isAuth &&
        authRoutes.map(({ path, Component }) => {
          console.log(path, Component);
          return <Route key={path} path={path} element={<Component />} exact />;
        })}
      {publicRoutes.map(({ path, Component }) => (
        <Route
          key={path}
          path={path}
          element={
            <AnimatePresence exitBeforeEnter>
              <Component />
            </AnimatePresence>
          }
          exact
        />
      ))}
      <Route path="*" element={<Navigate to={MAIN_ROUTE} replace />} />
    </Routes>
  );
};

export default AppRouter;
