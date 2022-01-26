export const thousandUnitNumber = number => {
  return (
    number &&
    Math.round(number)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  );
};

export const wonUnitNumber = number => {
  if (!number) return;

  if (number >= 1000000000000) {
    return `${thousandUnitNumber(parseInt(number / 1000000000000))}조`;
  } else if (number >= 100000000) {
    return `${thousandUnitNumber(parseInt(number / 100000000))}억`;
  } else {
    return `${thousandUnitNumber(parseInt(number / 10000))}만`;
  }
};
