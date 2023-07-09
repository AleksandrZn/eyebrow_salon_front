import styled from "styled-components";

export const Wrapper = styled.div`
  display: none;
  @media (max-width: 620px) {
    display: block;
  }
`;

export const StyledMenu = styled.nav`
  position: fixed;
  top: calc(71px + (86 - 71) * ((100vw - 280px) / (1920 - 280)));
  left: calc((100% - 100vw) / 2);
  height: calc(100vh - (71px + (86 - 71) * ((100vw - 280px) / (1920 - 280))));

  background-color: #f0f0f0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  padding: 10rem 0;
  transition: transform 0.2s, opacity 0.2s linear;
  transform: ${({ open }) => (open ? "translateX(0%)" : "translateX(-100%)")};
  opacity: ${({ open }) => (open ? "1" : "0")};
  width: calc(100vw + 1px);
`;

export const StyledLink = styled.div`
  margin: 0 auto;
  height: calc(70px + (85 - 70) * ((100vw - 280px) / (1920 - 280)));
`;
