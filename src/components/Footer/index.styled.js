import styled from "styled-components";
import { baseTheme } from "../../index.styled";

export const FooterContainer = styled.div`
  box-sizing: content-box;
  display: flex;
  justify-content: center;
  max-width: ${baseTheme.sizes.container.width}px;
  margin: 0px auto;
  padding: 0px 20px;
  color: ${baseTheme.colors.font_pale};
  ${baseTheme.sizes.footer};
  border-top: solid 2px ${baseTheme.colors.footer};
`;

export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 40px;
  margin-top: 68px;
  font-family: ${baseTheme.fonts.main400};
  font-size: 15px;
  a {
    color: ${baseTheme.colors.font_pale};
  }
`;

export const Text = styled.div`
  margin: 0px 40px;
  margin-top: 68px;
  font-family: ${baseTheme.fonts.main400};
  font-size: 16px;
`;
