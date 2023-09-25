/**
Write a function that takes in a string of one or more words, and returns the same string, 
but with all five or more letter words reversed (Just like the name of this Kata). 
Strings passed in will consist of only letters and spaces. 
Spaces will be included only when more than one word is present.

Examples:

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is reht
 */

const spinWords = string => 
	string.split(' ').reduce((accum, currItem) => {
		accum.push(currItem.length >= 5 ? reverseWord(currItem) : currItem);
		return accum;
	}, []).join(' ');

const reverseWord = word => word.split('').reverse().join('');

console.log(spinWords("Welcome"));
console.log(spinWords("Hey fellow warriors"));
console.log(spinWords("This is a test"));