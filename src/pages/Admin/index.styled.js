import styled from "styled-components";
import { PageHeader } from "antd";
export const PageHeaderCustom = styled(PageHeader)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 16px;
  gap: 850px;

  position: relative;
  width: 1919px;
  height: 48px;
  & p {
    width: 101px;
    height: 32px;

    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 32px;
    /* identical to box height, or 178% */

    /* Character / Primary(inverse) */

    color: #ffffff;

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
  }
  background: #001529;
  /* border & divider/divider ↓ */

  box-shadow: inset 0px -1px 0px #f0f0f0;
`;
