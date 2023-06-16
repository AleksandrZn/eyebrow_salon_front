import Scrollbar from "smooth-scrollbar";
import { useEffect } from "react";
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";

//   const overscrollOptions = {
//     enable: true,
//     effect: 'bounce',
//     damping: 0.15,
//     maxOverscroll: 150,
//     glowColor: '#fff',
//   };

const overscrollOptions = {
  enable: true,
  effect: "glow",
  damping: 0.2,
  maxOverscroll: 40,
  glowColor: "#222a2d",
};

const options = {
  damping: 0.07,
  plugins: {
    overscroll: { ...overscrollOptions },
  },
};


export const Scroll = () => {
  useEffect(() => {
    const header = document.getElementById("header");
    Scrollbar.use(OverscrollPlugin);

    const scrollbar = Scrollbar.init(document.body, options);

    scrollbar.addListener(function (status) {
      const offset = status.offset;

      header.style.transform = `translate3d(-50%, ${offset.y}px, 0px)`;
    });
    return () => {
      if (Scrollbar) Scrollbar.destroy(document.body);
    };
  }, [global.isOpenBurger]);

  return null;
};
