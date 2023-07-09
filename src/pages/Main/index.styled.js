import styled from "styled-components";
import { baseTheme } from "../../index.styled";

export const BlockWrapper = styled.div`
  scroll-snap-align: start;
  display: flex;
  box-sizing: content-box;
  margin: 0px auto;
  width: calc(280px + (1640 - 280) * ((100vw - 280px) / (1920 - 280)));
  padding-top: calc(70px + (125 - 70) * ((100vw - 280px) / (1920 - 280)));
  overflow: hidden;
  justify-content: space-between;
  height: ${({ id }) =>
    id === "Section-2"
      ? `calc(557px + (726 - 557) * ((100vw - 280px) / (1920 - 280)))`
      : `auto`};
  @media (max-width: 620px) {
    flex-direction: column-reverse;
    width: 100%;
    margin: 0;
  }
`;

export const MainBlockWrapper = styled(BlockWrapper)`
  background: linear-gradient(180deg, #454851 0%, #4f515d 51.56%, #4d5059 100%);
  background-clip: content-box;
  width: auto;
  margin: 0px auto;
  position: relative;
  color: white;
  padding-top: 0;
  @media (max-width: 620px) {
    flex-direction: column;
    background: none;
    width: 100%;
    height: auto;
    color: #151515;
  }
`;

export const MainInfoContainer = styled.div`
  max-width: 38%;
  margin-right: calc(31px + (141 - 31) * ((100vw - 390px) / (1920 - 390)));
  margin-top: auto;
  margin-bottom: auto;
  @media (max-width: 620px) {
    max-width: 100%;
    margin: 0;
  }
  @media (min-width: 620px) and (max-width: 800px) {
    max-width: 50%;
    margin-left: 30px;
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

export const WrapperSlider = styled.div`
  width: calc(280px + (1640 - 280) * ((100vw - 280px) / (1920 - 280)));
  height: calc(572px + (648 - 572) * ((100vw - 280px) / (1920 - 280)));
  background: #151515;
  position: relative;
  margin: 0px auto;
  @media (max-width: 620px) {
    width: 100%;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${({ left }) =>
    left
      ? " "
      : "margin-right:calc(62px + (106 - 62) * ((100vw - 390px) / (1920 - 390)));"};

  @media (max-width: 620px) {
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
  }
`;

export const ContainerInfo = styled.div`
  max-width: 43%;
  margin-left: 5%;
  margin-right: 5%;
  @media (min-width: 620px) and (max-width: 800px) {
    max-width: 50%;
  }
  @media (max-width: 620px) {
    max-width: 100%;
    margin: 0;
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
