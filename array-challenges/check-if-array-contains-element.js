function arrayContainsElement(arr, element) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return true;
    }
  }
  return false;
}
console.log(arrayContainsElement([1, 2, 3, 4, 5], 3)); // true
console.log(arrayContainsElement(["a", "b", "c", "d"], "e")); // false
