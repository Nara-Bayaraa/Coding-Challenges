//Using parseInt:
function removeLeadingZeros(str) {
    return parseInt(str, 10).toString(); 
}
console.log(removeLeadingZeros("00123")); // "123"
console.log(removeLeadingZeros("0000"));  // "0"
console.log(removeLeadingZeros("000456")); // "456"

//Using Regular Expressions:
function removeLeadingZeros(str) {
    return str.replace(/^0+/, '') || "0"; 
}
console.log(removeLeadingZeros("00123")); // "123"
console.log(removeLeadingZeros("0000"));  // "0"
console.log(removeLeadingZeros("000456")); // "456"
