/**
Convert a number to a binary coded decimal (BCD).

You can assume input will always be an integer. If it is a negative number then simply place a minus sign in front of the output string. Output will be a string with each digit of the input represented as 4 bits (0 padded) with a space between each set of 4 bits.

Ex.

n =  10 -> "0001 0000"
n = -10 -> "-0001 000
 */

const toBcd = number => {
	let negative = number < 0;

	let result = splitNumber(Math.abs(number)).reduce((accum, currItem) => {
		return accum + toBinary(currItem).padStart(4, '0') + ' ';
	}, '').trim();

	return negative ? '-' + result : result;
}

const splitNumber = number => number.toString().split('').map((currItem => {return parseInt(currItem);}))

const toBinary = number => {
	let result = '';

	while(number > 0){
		result = number % 2 + result;
		number = parseInt(number / 2);
	}

	return result;
}

console.log(toBcd(10));
console.log(toBcd(123456));