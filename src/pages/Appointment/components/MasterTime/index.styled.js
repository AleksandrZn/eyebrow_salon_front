import { Button } from "antd";
import styled, { css } from "styled-components";

export const Text = styled.div``;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  ${({ width }) =>
    width
      ? css`
          max-width: ${width}px;
        `
      : `none`};
`;

export const TimeWrapper = styled.div``;

export const MasterTimeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  & > span {
    align-self: flex-end;
  }
`;
