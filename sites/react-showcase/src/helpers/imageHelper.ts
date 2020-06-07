export const getImagePath = async (path: Promise<any>) => {
  const imagePath = await path;
  return imagePath.default;
};

export default {};
