export const trimString = (string, length) =>
  string.length > length ? `${string.substring(0, length - 3)}...` : string;

export default {};
