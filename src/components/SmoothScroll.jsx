import { useEffect } from "react";
import Scrollbar, { ScrollbarPlugin } from "smooth-scrollbar";
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";

const overscrollOptions = {
  enable: true,
  effect: "glow",
  damping: 0.2,
  maxOverscroll: 40,
  glowColor: "#222a2d",
};

class ModalPlugin extends ScrollbarPlugin {
  static pluginName = "modal";

  static defaultOptions = {
    open: false,
  };

  transformDelta(delta) {
    return this.options.open ? { x: 0, y: 0 } : { x: delta.x, y: delta.y };
  }
}
const options = {
  damping: 0.07,
  plugins: {
    overscroll: { ...overscrollOptions },
    modal: { ...ModalPlugin },
  },
};

export const Scroll = () => {
  useEffect(() => {
    const header = document.getElementById("header");
    Scrollbar.use(ModalPlugin, OverscrollPlugin);

    const scrollbar = Scrollbar.init(document.body, options);

    scrollbar.addListener(function (status) {
      const offset = status.offset;

      header.style.transform = `translate3d(-50%, ${offset.y}px, 0px)`;
    });
    return () => {
      if (Scrollbar) Scrollbar.destroy(document.body);
    };
  }, []);

  return null;
};
