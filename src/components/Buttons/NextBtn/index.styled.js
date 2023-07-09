import styled from "styled-components";

import { css } from "styled-components";

export const Btn = styled.div`
  & svg {
    cursor: pointer;
    height: calc(68px + (124 - 68) * ((100vw - 390px) / (1920 - 390)));
    width: calc(62px + (106 - 62) * ((100vw - 390px) / (1920 - 390)));
  }
  ${({ invert }) => (invert ? "filter: invert(75%); margin: 0 " : "")};
  display: flex;
  justify-content: flex-end;
  margin-bottom: calc(5px + (48 - 5) * ((100vw - 390px) / (1920 - 390)));
  path {
    fill: white;
    stroke: white;
    &:nth-child(1) {
      transform-origin: center;
      transition: 0.2s;
    }
    &:nth-child(2) {
      fill: none;
      transform-origin: center;
      transition: 0.2s;
    }
  }
  ${({ touch, hover }) =>
    touch || hover
      ? css`
          svg {
            path:nth-child(1) {
              transform: scale(1.1, 1.1);
            }
            path:nth-child(2) {
              transform: scale(0.8, 0.8);
            }
          }
        `
      : ""}

  @media (max-width: 620px) {
    path {
      fill: #151515;
      stroke: #151515;
    }
  }
  
  ${({ black }) =>
    black
      ? css`
          path {
            fill: #151515;
            stroke: #151515;
          }
        `
      : css`
          @media (max-width: 620px) {
            margin-right: 5%;
          }
        `}
`;
