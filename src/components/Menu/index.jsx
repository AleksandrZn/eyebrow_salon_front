import React, { useState, useRef, useContext } from "react";

import Hamburger from "../Hamburger";
import { StyledMenu, StyledLink } from "./index.styled";

import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import { Btn } from "../NavBar/index.styled";
import { APPOINTMENT_ROUTE, COURSES_ROUTE } from "../../utils/consts";
import { Context } from "../..";
import { observer } from "mobx-react-lite";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
export const Menu = observer(({ active, type, handleClick }) => {
  const node = useRef(null);
  const { global } = useContext(Context);
  const close = () => {
    global.setIsOpenBurger(false);
  };

  useOnClickOutside(node, () => {
    global.setIsOpenBurger(false);
  });

  const animations = {
    initial: { opacity: 0, x: 0 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 0 },
  };

  return (
    <div ref={node}>
      <AnimatePresence exitBeforeEnter>
        {global.isOpenBurger && (
          <motion.div
            variants={animations}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 1 }}
          >
            <StyledMenu open={global.isOpenBurger}>
              <StyledLink open={global.isOpenBurger} onClick={() => close()}>
                <Btn
                  style={{ display: "flex" }}
                  onClick={() => handleClick(COURSES_ROUTE)}
                  active={active.courses}
                  type={type}
                >
                  Курсы
                </Btn>
              </StyledLink>
              <StyledLink open={global.isOpenBurger} onClick={() => close()}>
                <Btn
                  style={{ display: "flex" }}
                  onClick={() => handleClick(APPOINTMENT_ROUTE)}
                  active={active.appoint}
                  type={type}
                >
                  Запись
                </Btn>
              </StyledLink>
            </StyledMenu>
          </motion.div>
        )}
      </AnimatePresence>

      <Hamburger />
    </div>
  );
});
