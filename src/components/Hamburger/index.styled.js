import styled from "styled-components";

export const StyledHamburger = styled.button`
  position: sticky;
  top: 50%;
  width: 24px;
  height: 18px;
  background-color: none;
  display: none;
  flex-direction: column;
  justify-content: space-between;

  padding: 0;
  border: none;
  cursor: pointer;
  outline: none;
  z-index: 10;

  div {
    width: 100%;
    height: 2px;
    transition: all 0.2s linear;
    transform-origin: 1px;
    background-color: #151515;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      transform-origin: center;
      transform: ${({ open }) => (open ? "rotate(360deg)" : "rotate(0)")};
      opacity: ${({ open }) => (open ? "0" : "1")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
  @media (max-width: 620px) {
    display: flex;
  }
`;
