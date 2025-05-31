function findMissingAndRepeating(arr) {
  const n = arr.length;
  const count = {};
  arr.forEach(num => count[num] = (count[num] || 0) + 1);

  for (let i = 1; i <= n; i++) {
    if (!count[i]) {
      for (let j = 1; j <= n; j++) { 
        if (count[j] === 2) {
          console.log(j + ', ' + i);
          return;
        }
      }
    }
  }
}
findMissingAndRepeating([3, 1, 3]);         // 3, 2
findMissingAndRepeating([4, 3, 6, 2, 1, 1]); // 1, 5


