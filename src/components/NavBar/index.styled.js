import styled from "styled-components";
import { baseTheme } from "../../index.styled";

import { Btn } from "../../components/Buttons/NavBtn/index.styled";


export const Header = styled.div`
  position: fixed;
  position: relative;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  z-index: 10;
  width: calc(280px + (1640 - 280) * ((100vw - 280px) / (1920 - 280)));
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: solid #D4D4D4 2px;
  box-sizing: content-box;
  height: calc(70px + (85 - 70) * ((100vw - 280px) / (1920 - 280)));
  position: relative;
  :before {
    content: "";
    width: calc(280px + (1920 - 280) * ((100vw - 280px) / (1920 - 280)));
    height: calc(70px + (85 - 70) * ((100vw - 280px) / (1920 - 280)));
    background: #F9F9F9;
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
