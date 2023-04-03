/**
A palindrome is a word, phrase, number, or other sequence of symbols or elements, 
whose meaning may be interpreted the same way in either forward or reverse direction. 
Famous examples include "Amore, Roma", "A man, a plan, a canal: Panama" and "No 'x' in 'Nixon'". - wikipedia

Our goal is to determine whether or not a given string is a valid palindrome or not.

Like the above examples, here are a few test cases which are also populated:

"Amore, Roma" => valid
"A man, a plan, a canal: Panama" => valid
"No 'x' in 'Nixon'" => valid
"Abba Zabba, you're my only friend" => invalid

You can see that they are case insensitive and disregards non alphanumeric characters. 
In addition to a few predefined tests, your function will also be tested against a random 
string generator 50 times which are guaranteed to produce valid palindromes.

Notes:

The empty string "" can be read forward or backward the same, it's a palindrome in our case.

 */

const palindrome = string => 
	string.toLowerCase().replace(/[^0-9a-z]/gi, '') == string.toLowerCase().split('').reverse().join('').replace(/[^0-9a-z]/gi, '');

console.log(palindrome("Madam? I'm Adam!"));
console.log(palindrome("Under_scores; Serocsrednu"));
console.log(palindrome("101"));
console.log(palindrome(""));

console.log(palindrome("Abba Zabba, you're my only friend"));
console.log(palindrome("911"));