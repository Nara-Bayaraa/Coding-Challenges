function findLongestSubstringWithoutRepeats(word) {
  let maxLenSubstring = 0;
  let start = 0;
  let seen = {};
  let longestSubstring = "";

  for (let i = 0; i < word.length; i++) {
    let char = word[i];

    if (seen[char] !== undefined && seen[char] >= start) {
      start = seen[char] + 1;
    }
    if (i - start + 1 > maxLenSubstring) {
      maxLenSubstring = i - start + 1;
      longestSubstring = word.substring(start, i + 1);
    }
    seen[char] = i;
  }
  return `${maxLenSubstring} ("${longestSubstring}")`;
}

console.log(findLongestSubstringWithoutRepeats("abcabcbb")); // 3 ("abc")
console.log(findLongestSubstringWithoutRepeats("bbbbb")); // 1 ("b")
console.log(findLongestSubstringWithoutRepeats("pwwkew")); // 3 ("wke")
