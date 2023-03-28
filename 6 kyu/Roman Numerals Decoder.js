/**
Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. 
You don't need to validate the form of the Roman numeral.

Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, 
starting with the leftmost digit and skipping any 0s. 
So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) 
and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). 
The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

Example:

solution('XXI'); // should return 21

Help:

Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000

 */

const data = {
	'M': 1000,
	'D': 500, 
	'C': 100,
	'L': 50, 
	'X': 10,
	'V': 5,
	'I': 1
  };

const solution = roman => {
	let result = 0;

	for (let prev = -1, curr = 0; curr < roman.length; prev++, curr++) {
		result += data[roman[curr]];  
		
		if (checkPairs(roman[prev], roman[curr])) {
			result -= 2 * data[roman[prev]];
		}
	}

	return result;
}

const checkPairs = (x, y) => {
	return ['IV', 'IX', 'XL', 'XC', 'CD', 'CM'].indexOf(x + y) > -1;
}

console.log(solution("MCMXC"));
console.log(solution("MMVIII"));
console.log(solution("MDCLXVI"));