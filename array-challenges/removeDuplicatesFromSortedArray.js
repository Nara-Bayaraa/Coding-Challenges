function removeDuplicates(arr) {
  let uniqueElements = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueElements.includes(arr[i])) {
        uniqueElements.push(arr[i])
    }
  }
  return uniqueElements;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 4, 5, 5]));
console.log(removeDuplicates([2, 2, 2, 2, 2]));
console.log(removeDuplicates([1, 2, 3]));
