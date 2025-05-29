function leaders(arr) {
  let right = [];
  let maxSoFar = -Infinity;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > maxSoFar) {
      right.push(arr[i]);
      maxSoFar = arr[i];
    }
  }
  return right.reverse();
}
console.log(leaders([16, 17, 4, 3, 5, 2]));//[ 17, 5, 2 ]
