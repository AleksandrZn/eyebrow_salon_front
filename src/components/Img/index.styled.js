import styled from "styled-components";

export const WrapperLoad = styled.div`
  border-radius: ${({ circle }) => (circle ? "50%" : "0")};
  min-width: ${({ width }) => width};
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 620px) {
    width: ${({ widthMedia }) => widthMedia};
    height: ${({ heightMedia }) => heightMedia};
  }
  & .spinner {
    animation: rotate 2s linear infinite;
    width: 50px;
    height: 50px;
    & .path {
      stroke: #151515;
      stroke-linecap: round;
      animation: dash 1.5s ease-in-out infinite;
    }
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;
export const WrapperImage = styled.div`
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${({ circle }) => (circle ? "50%" : "0")};
  }

  width: ${({ width }) => width};
  height: ${({ width, circle }) => circle && width};
  min-width: ${({ width, circle }) => circle && width};
  min-height: ${({ width, circle }) => circle && width};
  object-fit: cover;
  @media (max-width: 620px) {
    width: ${({ widthMedia }) => widthMedia};
    height: ${({ heightMedia }) => heightMedia};
  }
`;
