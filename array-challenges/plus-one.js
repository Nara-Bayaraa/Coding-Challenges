function addingOneToNumber(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array");
  }
  if (arr.length === 0) {
    throw new Error("Array cannot be empty");
  }
  if (arr.some((item) => typeof item !== "number")) {
    throw new Error("All elements must be numbers");
  }
  let num = Number(arr.join(""));
  return num + 1;
}
console.log(addingOneToNumber([1, 2, 4]));
console.log(addingOneToNumber([9, 9, 9]));
