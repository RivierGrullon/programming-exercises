let x = [1, 1, -1, -1, 0];
function PlusMinus(arr: any) {
  const arrLength = arr.length;
  let a = arr.filter((n: any) => n === 0).length;
  let e = arr.filter((n: any) => n > 0).length;
  let i = arr.filter((n: any) => n < 0).length;
  return {
    Positive: (a / arrLength).toFixed(6),
    Negative: (e / arrLength).toFixed(6),
    Zero: (i / arrLength).toFixed(6),
  };
}

console.log(PlusMinus(x));
