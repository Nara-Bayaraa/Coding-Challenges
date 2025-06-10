function removeWhiteSpace(str) {
  let words = "";
  words = str.split(" ").join("");
  return words;
}
console.log(removeWhiteSpace("Hello   World!  Welcome to   JavaScript"));

function removeWhiteSpace(str) {
  return str.replace(/\s+/g, '');
}
console.log(removeWhiteSpace("Welcome to   JavaScript"));

