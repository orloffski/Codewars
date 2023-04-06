/**
Write a function makePalindrome that takes a string as the argument 
and then returns the shortest possible palindrome made from that string 
without modifying the original string. 
If more than one palindrome can be made, the function should return 
the solution where the given string appears at the beginning of the palindrome.

For example:

makePalindrome('a') --> 'a'
makePalindrome('ab') --> 'aba'
makePalindrome('abc') --> 'abcba'
makePalindrome('race') --> 'racecar'
makePalindrome('leveled') --> 'deleveled'

Only single word strings will be passed as arguments to the function.

 */

const makePalindrome = text => {
	if(isPalindrome(text)){
		return text;
	}

	if(hasPalindromePart(text)){
		console.log(getLongerPalindromePart(text));
	}else{
		 
	}
}

const isPalindrome = text => text.toLowerCase() === text.toLowerCase().split('').reverse().join('');

const hasPalindromePart = text => {
	for(let i = 0; i < text.length - 1; i++){
		if(i != 0 && i < text.length - 1 && text[i - 1] == text[i + 1]){
			return true;
		}
	}

	return false;
}

const getLongerPalindromePart = text => {

}

console.log(makePalindrome('a'));
console.log(makePalindrome('radar'));
console.log(makePalindrome('racecar'));

console.log(makePalindrome('leveled'));
console.log(makePalindrome('race'));