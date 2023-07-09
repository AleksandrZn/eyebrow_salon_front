import React, { useEffect, useState } from "react";
import { WrapperImage, WrapperLoad } from "./index.styled";

export const Img = ({
  src,
  width,
  widthMedia,
  heightMedia,
  onClick,
  circle,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = src;
  }, [src]);

  return (
    <>
      {!imageLoaded && (
        <WrapperLoad
          circle={circle}
          width={width}
          widthMedia={widthMedia}
          heightMedia={heightMedia}
        >
          <svg className="spinner" viewBox="0 0 50 50">
            <circle
              className="path"
              cx="25"
              cy="25"
              r="20"
              fill="none"
              strokeWidth="5"
            ></circle>
          </svg>
        </WrapperLoad>
      )}
      {imageLoaded && (
        <WrapperImage
          circle={circle}
          width={width}
          widthMedia={widthMedia}
          heightMedia={heightMedia}
        >
          <img onClick={() => onClick && onClick()} src={src} alt="" />
        </WrapperImage>
      )}
    </>
  );
};
