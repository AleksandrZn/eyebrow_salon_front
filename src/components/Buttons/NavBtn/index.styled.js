import styled, { css } from "styled-components";

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

  ${({ touch, hover, active }) =>
    touch || hover || active
      ? css`
          --d: 100%;
        `
      : ""}

  @media (max-width: 620px) {
    display: none;
  }
`;
