import styled from "styled-components";
import { baseTheme } from "../../.././index.styled";

import { css } from "styled-components";

export const Button = styled.div`
  cursor: pointer;
  font-family: ${baseTheme.fonts.main900};
  padding: 17px 30px;
  height: 51px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  text-transform: uppercase;
  background: linear-gradient(currentColor 0 0) 0 100%,
    linear-gradient(currentColor 0 0) 0 100%,
    linear-gradient(currentColor 0 0) 100% 100%,
    linear-gradient(currentColor 0 0) 100% 100%;
  background-size: var(--p, 55%) 2px, 2px var(--d, 0);
  background-repeat: no-repeat;
  transition: 0.2s;
  font-size: calc(16px + (24 - 16) * ((100vw - 390px) / (1920 - 390)));
  ${({ touch, hover, active }) =>
    touch || hover || active
      ? css`
          --d: 100%;
          --p: 0%;
        `
      : ""}
`;
