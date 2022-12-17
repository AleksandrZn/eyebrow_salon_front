import { Button } from "antd";
import styled from "styled-components";

export const Text = styled.div``;

export const TextWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
  & ${Text} {
    margin-left: 55px;
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  & Button {
    margin-left: 55px;
  }
`;
