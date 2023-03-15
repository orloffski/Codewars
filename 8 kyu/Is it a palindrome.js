/**
Write a function that checks if a given string (case insensitive) is a palindrome.
 */

const isPalindrome = x => x.split("").reverse().join("").toLowerCase() == x.toLowerCase();

console.log(isPalindrome('a'));
console.log(isPalindrome('aba'));
console.log(isPalindrome('Abba'));
console.log(isPalindrome('hello'));
console.log(isPalindrome('Bob'));
console.log(isPalindrome('Madam'));
console.log(isPalindrome('AbBa'));
console.log(isPalindrome(''));