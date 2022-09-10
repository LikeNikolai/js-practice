function culkulateMinesPlus(array) {
  return array.reduce(
    (acc, item) => {
      if (item > 0) {
        return { plus: acc.plus + item, minus: acc.minus };
      } else {
        return {
          plus: acc.plus,
          minus: acc.minus + item,
        };
      }
    },
    { plus: 0, minus: 0 }
  );
}
const nums = [-90, 45, 0, 16, -18, 24, -67, 43];
console.log(culkulateMinesPlus(nums));
