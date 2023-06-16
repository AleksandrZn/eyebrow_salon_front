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

export const Btn = styled.div`
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  & {
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
    cursor: pointer;
  }
  background: linear-gradient(currentColor 0 0) bottom / var(--d, 0) 2px
    no-repeat;
  transition: 0.2s;
  text-transform: uppercase;
  font-size: clamp(var(--min), var(--val), var(--max));
  --min: 1em;
  --val: 2.5vw;
  --max: 1.125em;

  ${({ type }) =>
    type === "MOBILE"
      ? css`
          &:active {
            --d: 100%;
          }
        `
      : css`
          &:hover {
            --d: 100%;
          }
        `};

  ${({ active }) =>
    active
      ? css`
          --d: 100%;
        `
      : ``};

  @media (max-width: 620px) {
    display: none;
  }
`;

export const Header = styled.div`
  position: fixed;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  z-index: 10;
  width: calc(280px + (1640 - 280) * ((100vw - 280px) / (1920 - 280)));
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: solid rgba(0, 0, 0, 0.15) 1px;
  box-sizing: content-box;
  height: calc(70px + (85 - 70) * ((100vw - 280px) / (1920 - 280)));
  position: relative;
  :before {
    content: "";
    width: calc(280px + (1920 - 280) * ((100vw - 280px) / (1920 - 280)));
    height: calc(70px + (85 - 70) * ((100vw - 280px) / (1920 - 280)));
    background: #f0f0f0;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: -10;
  }
  & img {
    cursor: pointer;
    z-index: 10;
    width: calc(173px + (203 - 173) * ((100vw - 280px) / (1920 - 280)));
    @media (max-width: 620px) {
      margin-left: 25px;
    }
  }
  font-size: calc(16px + (18 - 16) * ((100vw - 280px) / (1920 - 280)));
`;

export const NavButtWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1 0 auto;
  justify-content: flex-end;
  height: 100%;
  ${Btn} {
    margin: 0px 30px;
    font-size: calc(16px + (18 - 16) * ((100vw - 280px) / (1920 - 280)));
  }
  font-family: ${baseTheme.fonts.main500};
`;
