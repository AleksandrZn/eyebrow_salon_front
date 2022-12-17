import styled from "styled-components";
import { baseTheme } from "../../index.styled";

export const BlockWrapper = styled.div`
  height: 775px;
  display: flex;
  padding: 102px 0px;
  box-sizing: content-box;
  justify-content: space-between;
`;
export const Image1 = styled.img`
  max-width: 603px;
  object-fit: contain;
`;
export const Image2 = styled.img`
  max-width: 247px;
  object-fit: contain;
`;

export const ImageWrapper = styled.div``;

export const Image3 = styled.img`
  max-width: 630px;
  object-fit: contain;
  align-self: flex-start;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 548px;
  ${({ left }) => (left ? "" : "margin: 0px auto;")}
`;
export const Header = styled.p`
  font-family: ${baseTheme.fonts.header400};
  font-size: 128px;
  line-height: 80%;
  width: min-content;
  margin-bottom: 55px;
`;
export const Text = styled.p`
  font-family: ${baseTheme.fonts.main400};
  font-size: 22px;
  margin-bottom: 60px;
`;
export const Button = styled.div`
  font-family: ${baseTheme.fonts.main900};
  font-size: 32px;
  border-bottom: 2px solid ${baseTheme.colors.font};
  width: 304px;
  height: 74px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  margin-bottom: 57px;
`;
export const NextButton = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  align-self: flex-end;
  margin-right: -120px;
`;
