function findingSum(numbers) {
  while (numbers > 9) {
    let sum = 0;

    let digits = numbers.toString().split("");

    for (let digit of digits) {
      sum += parseInt(digit);
    }
    numbers = sum;
  }
  return numbers;
}
console.log(findingSum(1234));
console.log(findingSum(5674));
