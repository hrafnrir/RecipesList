export const getMinutes = (time) => {
  return time
    .split(":")
    .reduce(
      (minutes, item, index) => (minutes += index ? +item : +item * 60),
      0
    );
};
