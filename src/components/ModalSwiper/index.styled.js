import styled from "styled-components";

export const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: rgba(21, 21, 21, 1);
  top: ${({ offset }) => `${offset.y}px`};
  left: 0;
  display: flex;
  justify-content: center;
  z-index: 1000;
  align-items: center;
  transition: 0.2s opacity linear;
  opacity: ${({ open }) => (open ? "1" : "0")};
  pointer-events: ${({ open }) => (open ? "all" : "none")};
  .swiper {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.2s transform linear;
    transform: scale(${({ open }) => (open ? "1" : "0.5")});
  }
  img {
    max-height: 100vh;
    max-width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }
  .swiper-zoom-container {
    min-height: 100vh;
    max-width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
  }
  .swiper-pagination-bullet {
    border: 2px solid white;
    background-color: black;
    height: 10px;
    width: 10px;
  }
`;
export const CloseBtn = styled.div`
  background-color: #151515;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  position: absolute;
  margin: 10px;
  top: 0;
  right: 0;
  z-index: 1000;
  & svg {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
`;
