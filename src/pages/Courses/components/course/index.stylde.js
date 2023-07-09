import styled from "styled-components";
import { css } from "styled-components";
import { baseTheme } from "../../../../index.styled";
export const CourseWrapper = styled.div`
  scroll-snap-align: start;
  display: flex;
  justify-content: space-between;
  box-sizing: content-box;
  background-color: #ffffff;
  height: calc(400px + (640 - 400) * ((100vw - 280px) / (1920 - 280)));
  @media (max-width: 620px) {
    flex-direction: column;
    width: 100vw;
    height: auto;
    ${({ index }) => index && "margin-top:0"};
  }
  width: calc(280px + (1640 - 280) * ((100vw - 280px) / (1920 - 280)));
  margin: 0px auto;
  margin-top: calc(70px + (125 - 70) * ((100vw - 280px) / (1920 - 280)));
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: calc(30px + (60 - 30) * ((100vw - 280px) / (1920 - 280))) 30px;
  width: 58%;
  @media (max-width: 620px) {
    width: calc(100% - 60px);
    height: auto;
  }
  @media (max-width: 330px) {
    width: calc(100% - 20px);
    margin: 10px;
  }
`;

export const Text = styled.div`
  font-family: ${baseTheme.fonts.main400};
  margin-bottom: calc(15px + (20 - 15) * ((100vw - 280px) / (1920 - 280)));
  font-size: calc(16px + (20 - 16) * ((100vw - 390px) / (1920 - 390)));
  width: 100%;
`;
export const Header = styled.div`
  font-family: ${baseTheme.fonts.header400};
  line-height: 74px;
  margin-bottom: calc(20px + (30 - 20) * ((100vw - 280px) / (1920 - 280)));
  font-size: calc(48px + (64 - 48) * ((100vw - 390px) / (1920 - 390)));
  width: 100%;
`;

export const DescriptionBtn = styled.div`
  margin-bottom: calc(30px + (60 - 30) * ((100vw - 280px) / (1920 - 280)));
  & svg {
    cursor: pointer;
  }
  path {
    &:nth-child(1) {
      fill: #151515;
      transform-origin: center;
      transition: 0.1s;
    }
  }
  ${({ touch, hover }) =>
    touch || hover
      ? css`
          svg {
            path:nth-child(1) {
              transform: scale(0.9);
            }
          }
        `
      : ""}
`;
export const Price = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  font-size: calc(24px + (32 - 24) * ((100vw - 390px) / (1920 - 390)));
  margin-left: auto;
  display: inline-block;
  @media (max-width: 620px) {
    margin-left: 0;
    margin-right: auto;
  }
`;

export const BtnSocial = styled.svg`
  width: calc(125px + (145 - 125) * ((100vw - 280px) / (1920 - 280)));
  height: auto;

  cursor: pointer;
  transition: 0.1s;

  & path {
    &:nth-child(3) {
      transform-origin: center;
      transition: 0.1s;
    }
    &:nth-child(2) {
      fill: #151515;
      transform-origin: center;
      transition: 0.1s;
    }
  }
  ${({ touch, hover }) =>
    touch || hover
      ? css`
          transform: scale(0.95);
          path:nth-child(3) {
            transform: scale(1.1);
          }
          path:nth-child(2) {
            transform: scale(1.2);
          }
        `
      : ""}
`;
export const WrapperBtns = styled.div`
  margin-bottom: 60px;
  display: flex;
  flex-direction: row;
  & a:first-child {
    margin-right: 20px;
  }
  @media (max-width: 330px) {
  & a:first-child {
    margin-right:5px;
  }
`;
