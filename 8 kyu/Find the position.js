/**
When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1"

 */

const position = letter => `Position of alphabet: ${letter.charCodeAt(0) - 96}`;

console.log(position('a'));
console.log(position('z'));
console.log(position('e'));