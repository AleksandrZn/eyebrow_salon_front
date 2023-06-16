import styled from "styled-components";
import { baseTheme } from "../../index.styled";

export const FooterContainer = styled.div`
  box-sizing: content-box;
  display: flex;
  justify-content: center;
  padding: 0px auto;

  flex-wrap: wrap-reverse;

  width: calc(280px + (1640 - 280) * ((100vw - 280px) / (1920 - 280)));
  margin: 0px auto;
  color: ${baseTheme.colors.font_pale};
  ${baseTheme.sizes.footer};
  border-top: solid 2px ${baseTheme.colors.footer};
  margin-top: calc(80px + (136 - 80) * ((100vw - 280px) / (1920 - 280)));
`;

export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  font-family: ${baseTheme.fonts.main400};
  font-size: 15px;
  color: ${baseTheme.colors.font_pale};

  & :hover {
    color: #151515;
  }
  @media (max-width: 830px) {
    margin-top: calc(20px + (25 - 20) * ((100vw - 280px) / (1920 - 280)));
    margin-bottom: calc(10px + (15 - 10) * ((100vw - 280px) / (1920 - 280)));
    margin-right: calc(10px + (15 - 10) * ((100vw - 280px) / (1920 - 280)));
    margin-left: calc(10px + (15 - 10) * ((100vw - 280px) / (1920 - 280)));
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  font-family: ${baseTheme.fonts.main400};
  font-size: 16px;
  justify-content: center;
  @media (max-width: 830px) {
    margin-top: calc(20px + (25 - 20) * ((100vw - 280px) / (1920 - 280)));
    margin-bottom: calc(10px + (15 - 10) * ((100vw - 280px) / (1920 - 280)));
    margin-right: calc(10px + (15 - 10) * ((100vw - 280px) / (1920 - 280)));
    margin-left: calc(10px + (15 - 10) * ((100vw - 280px) / (1920 - 280)));
  }
`;
