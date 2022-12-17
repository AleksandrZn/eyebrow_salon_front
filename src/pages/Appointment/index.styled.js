import { Button } from "antd";
import styled, { css } from "styled-components";

export const ContentWrapper = styled.div`
  display: flex;
  ${({ height }) =>
    height
      ? css`
          max-height: ${height}px;
        `
      : `none`};
  & Button {
    align-self: center;
  }
`;

export const Header = styled.div``;

export const Image = styled.img`
  object-fit: contain;
`;

export const Text = styled.div``;

export const ServiceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 45%;
`;

export const TextWrapper = styled.div`
  display: flex;
  align-self: flex-end;
  flex-shrink: 1;
  & ${Text} {
    margin-left: 55px;
  }
`;

export const Content = styled.div`
  margin: 40px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
`;
