export const checkMobile = () => {
  if (window.matchMedia('(max-width: 600px)').matches) {
    return true;
  }
  return false;
};
