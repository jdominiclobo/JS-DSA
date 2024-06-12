const findMaxNumber = (arr) => {
  //   return Math.max(...arr);
  let maxNumber = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxNumber) {
      maxNumber = arr[i];
    }
  }
  return maxNumber;
};
console.log(findMaxNumber([2, 56, 34, 55, 23, 123, 22, 99]));
