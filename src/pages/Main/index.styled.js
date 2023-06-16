import styled from "styled-components";
import { baseTheme } from "../../index.styled";

export const BlockWrapper = styled.div`
  scroll-snap-align: start;
  display: flex;
  box-sizing: content-box;
  justify-content: space-between;
  @media (max-width: 620px) {
    flex-direction: column-reverse;
  }
`;

export const MainBlockWrapper = styled(BlockWrapper)`
  background: linear-gradient(180deg, #454851 0%, #4f515d 51.56%, #4d5059 100%);
  background-clip: content-box;
  width: auto;
  margin: 0px auto;
  height: calc(280px + (791 - 280) * ((100vw - 280px) / (1920 - 280))) px;
  position: relative;
  color: white;
  @media (max-width: 620px) {
    flex-direction: column;
    background: none;
    width: calc(280px + (1640 - 280) * ((100vw - 280px) / (1920 - 280)));
    justify-content: none;
    margin: 0px auto;
    height: auto;
    color: #151515;
  }
`;

export const MainInfoContainer = styled.div`
  width: 48%;
  margin-top: auto;
  margin-bottom: auto;
  @media (max-width: 620px) {
    width: 100%;
  }
`;
export const Slider = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  width: 100vw;
  .swiper {
    padding: 50px 0px;
    width: 100%;
  }

  .swiper-slide {
    width: calc(271px + (552 - 271) * ((100vw - 390px) / (1920 - 390)));
    height: calc(487px + (552 - 487) * ((100vw - 390px) / (1920 - 390)));
  }

  .swiper-slide img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const Image1 = styled.img`
  width: 48%;
  object-fit: cover;
  @media (max-width: 620px) {
    width: 100%;
  }
`;

export const ImageWrapper = styled.div``;

export const Image3 = styled.img`
  width: 50%;
  object-fit: cover;
  @media (max-width: 620px) {
    width: 100%;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin-left: 7%;
  justify-content: center;
  ${({ left }) => (left ? "  margin-left: 5%;  margin-right: 5%;" : "")};

  @media (max-width: 620px) {
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
  }
`;
export const Header = styled.p`
  font-family: ${baseTheme.fonts.header400};
  line-height: 80%;
  width: min-content;
  margin-top: calc(30px + (160 - 30) * ((100vw - 390px) / (1920 - 390)));
  margin-bottom: calc(20px + (55 - 20) * ((100vw - 390px) / (1920 - 390)));
  font-size: calc(48px + (128 - 48) * ((100vw - 390px) / (1920 - 390)));
`;
export const Text = styled.p`
  font-family: ${baseTheme.fonts.main400};
  margin-bottom: calc(37px + (60 - 37) * ((100vw - 390px) / (1920 - 390)));
  font-size: calc(16px + (20 - 16) * ((100vw - 390px) / (1920 - 390)));
`;
export const Button = styled.div`
  cursor: pointer;
  font-family: ${baseTheme.fonts.main900};
  padding: 17px 30px;
  height: 51px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  background: linear-gradient(currentColor 0 0) 0 100%,
    linear-gradient(currentColor 0 0) 0 100%,
    linear-gradient(currentColor 0 0) 100% 100%,
    linear-gradient(currentColor 0 0) 100% 100%;
  background-size: var(--p, 55%) 2px, 2px var(--d, 0);
  background-repeat: no-repeat;
  transition: 0.2s;
  font-size: calc(16px + (24 - 16) * ((100vw - 390px) / (1920 - 390)));
  &:hover {
    --d: 100%;
    --p: 0%;
  }
`;
export const NextButtonWhite = styled.div`
  & svg {
    width: calc(62px + (106 - 62) * ((100vw - 390px) / (1920 - 390)));
  }
  ${({ invert }) => (invert ? "filter: invert(75%); margin: 0 " : "")};
  display: flex;
  justify-content: flex-end;
  margin-right: calc(31px + (141 - 31) * ((100vw - 390px) / (1920 - 390)));
  path {
    fill: white;
    stroke: white;
    &:nth-child(1) {
      transform-origin: center;
      transition: 0.2s;
    }
    &:nth-child(2) {
      fill: none;
      transform-origin: center;
      transition: 0.2s;
    }
  }
  svg:hover {
    path:nth-child(1) {
      transform: scale(1.1, 1.1);
    }
    path:nth-child(2) {
      transform: scale(0.8, 0.8);
    }
  }
  @media (max-width: 620px) {
    path {
      fill: #151515;
      stroke: #151515;
    }
  }
`;
export const NextButtonBlack = styled(NextButtonWhite)`
  @media (max-width: 620px) {
    order: -1;
  }
  path {
    fill: #151515;
    stroke: #151515;
  }
`;
