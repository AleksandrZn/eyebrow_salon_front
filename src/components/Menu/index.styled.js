import styled from "styled-components";

export const StyledMenu = styled.nav`
  position: fixed;
  top: 0;
  right:calc((100% - 100vw) / 2) ;
  height: 100vh;

  background-color: #f0f0f0;
  z-index: -1;
  display: flex;
  flex-direction: column;
  padding: 10rem 0;

  width: 100vw;

  :before {
    content: "";
    width: calc(280px + (1640 - 280) * ((100vw - 280px) / (1920 - 280)));
    height: calc(71px + (86 - 71) * ((100vw - 280px) / (1920 - 280)));
    position: absolute;
    border-bottom: solid rgba(0, 0, 0, 0.15) 1px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
  }
`;

export const StyledLink = styled.div`
  margin: 0 auto;
  height: calc(70px + (85 - 70) * ((100vw - 280px) / (1920 - 280)));
`;
