export const getArrayFromString = (str) => {
  const mark = str.includes(";") ? ";" : ",";
  return str.split(mark).map((item) => item.trim().toLowerCase());
};
