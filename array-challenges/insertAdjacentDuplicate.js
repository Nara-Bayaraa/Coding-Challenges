function adjacentDuplicate(nums, k) {
  let arr = [];
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    arr.push(nums[i]);
    if (nums[i] === k) {
      arr.push(k);
    }
  }
  return arr.slice(0, n);
}
console.log(adjacentDuplicate([1, 0, 2, 3, 0, 4, 5, 0], 0));
