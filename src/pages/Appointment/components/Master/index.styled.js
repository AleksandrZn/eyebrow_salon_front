import styled from "styled-components";
import { css } from "styled-components";
export const MasterWrapper = styled.div`
  scroll-snap-align: start;
  display: flex;
  justify-content: space-between;
  box-sizing: content-box;
  background-color: #ffffff;
  height: calc(400px + (640 - 400) * ((100vw - 280px) / (1920 - 280)));
  @media (max-width: 620px) {
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
  width: calc(100% - 60px);
  @media (max-width: 330px) {
    width: calc(100% - 20px);
    margin: 10px;
  }
  .swiper {
    width: 100%;
    height: 100%;
    margin: 20px 0;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #000;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
`;

export const TextWrapper = styled.div`
  margin-left: calc(20px + (30 - 20) * ((100vw - 280px) / (1920 - 280)));
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Text = styled.div`
  font-family: Inter;
  font-size: calc(16px + (20 - 16) * ((100vw - 390px) / (1920 - 390)));
`;
export const Header = styled.div`
  font-family: Inter;
  font-weight: 600;
  font-size: calc(20px + (40 - 20) * ((100vw - 390px) / (1920 - 390)));
`;

export const DescriptionBtn = styled.div`
  margin-bottom: calc(15px + (60 - 15) * ((100vw - 280px) / (1920 - 280)));
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
  margin-bottom: calc(15px + (30 - 15) * ((100vw - 280px) / (1920 - 280)));
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
