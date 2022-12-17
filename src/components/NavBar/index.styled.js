import styled from "styled-components";
import { baseTheme } from "../../index.styled";

import { css, keyframes } from "styled-components";
const fade = keyframes`
  0% {
    transform: scale(1,1) ;
  }

  50% {
    transform: scale(1.1,1.1) ;
  }
  100% {
    opacity: scale(1,1);
  }
`;

export const Button = styled.div`
  & {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    & {
      margin: 0;
    }
    cursor: pointer;
    transition: 0.08s;
  }
  &:hover {
    background-image: radial-gradient(
        1px 45% at 0% 50%,
        rgba(0, 0, 0, 0.6),
        transparent
      ),
      radial-gradient(1px 45% at 100% 50%, rgba(0, 0, 0, 0.6), transparent);
  }
  &:active {
    transform: scale(1.1, 1.1);
  }
  ${({ active }) =>
    active
      ? css`
          background-image: radial-gradient(
              1px 45% at 0% 50%,
              rgba(0, 0, 0, 0.6),
              transparent
            ),
            radial-gradient(
              1px 45% at 100% 50%,
              rgba(0, 0, 0, 0.6),
              transparent
            );
        `
      : ``}
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  border-bottom: solid rgba(0, 0, 0, 0.15) 1px;
  height: 95px;
  & img {
    cursor: pointer;
  }
  font-size: 18px;
`;

export const NavButtWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1 0 auto;
  justify-content: flex-end;
  height: 100%;
  ${Button} {
    margin: 0px 30px;
  }
  font-family: ${baseTheme.fonts.main500};
`;
