function MaxMinSum(arr: Array<number>) {
  let secondArr = [...arr];
  let maxIndex = Math.max(...arr);
  let minIndex = Math.min(...secondArr);
  arr.splice(arr.indexOf(maxIndex), 1);
  secondArr.splice(secondArr.indexOf(minIndex), 1);
  return { min: arr.reduce((a, b) => a + b), max: secondArr.reduce((a, b) => a + b) };
}

console.log(MaxMinSum([1, 2, 3, 4, 5]));