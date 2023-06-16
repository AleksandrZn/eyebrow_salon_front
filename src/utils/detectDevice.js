export const detectDevice = () => {
  let isMobile = window.matchMedia || window.msMatchMedia;
  if (isMobile) {
    let match_mobile = isMobile("(pointer:coarse)");
    return match_mobile.matches;
  }
  return false;
};
