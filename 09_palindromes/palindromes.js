const palindromes = function (string) {
const palindrome = string.toLowerCase().replace(/[^a-z0-9]/g, "");
return palindrome.split("").reverse().join("") == palindrome;

};


// Do not edit below this line
module.exports = palindromes;
