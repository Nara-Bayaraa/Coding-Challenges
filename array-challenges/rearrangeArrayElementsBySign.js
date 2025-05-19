function rearrangeArray(arr) {
  let positiveNumber = [];
  let negativeNumber = [];

  for (let num of arr) {
    if (num < 0) {
      negativeNumber.push(num);
    } else {
      positiveNumber.push(num);
    }
  }
  const result = [];
  let positive = 0;
  let negative = 0;

  while (positive < positiveNumber.length && negative < negativeNumber.length) {
    result.push(positiveNumber[positive]);
    positive++;
    result.push(negativeNumber[negative]);
    negative++;
  }
  return result;
}
console.log(rearrangeArray([5, -5, 2, -2, 4, -8, 7, 1, 8, 0]));
console.log(rearrangeArray([1, -4, 2, -1, 3, 4]));
