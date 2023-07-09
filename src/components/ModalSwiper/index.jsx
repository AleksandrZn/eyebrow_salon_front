import React from "react";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Zoom, Navigation, Pagination } from "swiper";
import { CloseBtn, ModalWrapper } from "./index.styled";
import Scrollbar from "smooth-scrollbar";
export const ModalSwiper = ({ modalOpen, setModalOpen, srcs }) => {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    if (modalOpen) {
      Scrollbar.get(document.body).updatePluginOptions("modal", { open: true });
      setOffset(Scrollbar.get(document.body).offset);
    }
    if (!modalOpen && Scrollbar.has(document.body)) {
      Scrollbar.get(document.body).updatePluginOptions("modal", {
        open: false,
      });
    }
  }, [modalOpen]);

  return (
    <ModalWrapper open={modalOpen} offset={offset}>
      <CloseBtn onClick={() => setModalOpen(false)}>
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1338_32091)">
            <path
              d="M47.5 16.025L43.975 12.5L30 26.475L16.025 12.5L12.5 16.025L26.475 30L12.5 43.975L16.025 47.5L30 33.525L43.975 47.5L47.5 43.975L33.525 30L47.5 16.025Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_1338_32091">
              <rect width="60" height="60" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </CloseBtn>
      <Swiper
        zoom={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Zoom, Pagination]}
        className="mySwiper"
        spaceBetween={0}
      >
        {srcs.map((elem) => (
          <SwiperSlide key={elem}>
            <div className="swiper-zoom-container">
              <img alt="" src={elem} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </ModalWrapper>
  );
};
