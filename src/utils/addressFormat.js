export const addressFormat = address => {
  if (!address) return;

  return address
    .trim()
    .split(' ')
    .filter(word => word)
    .slice(2, 4)
    .join(' ');
};
