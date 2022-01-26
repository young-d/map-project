export const addressFormat = address => {
  return address
    .trim()
    .split(' ')
    .filter(word => word)
    .slice(2, 4)
    .join(' ');
};
