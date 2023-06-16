export const delay = (promise) => {
  return new Promise((resolve) => {
    setTimeout(resolve, 100);
  }).then(() => promise);
};
