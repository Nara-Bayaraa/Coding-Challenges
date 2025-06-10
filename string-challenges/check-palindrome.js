function isPalindrome(str) {
    
  const cleanedStr = str.replace(/[^a-z0-9]/gi, " ").toLowerCase();
  const reversedStr = cleanedStr.split("").reverse().join("");
  if (cleanedStr === reversedStr) {
    return true;
  }
  return false;
}
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("A man a plan a canal Panama")); // true
