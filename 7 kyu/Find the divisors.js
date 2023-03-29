/**
Create a function named divisors/Divisors that takes an integer n > 1 and returns an array 
with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. 
If the number is prime return the string '(integer) is prime' (null in C#) 
(use Either String a in Haskell and Result<Vec<u32>, String> in Rust).
Example:

divisors(12); // should return [2,3,4,6]
divisors(25); // should return [5]
divisors(13); // should return "13 is prime"

 */

const divisors = integer => {

	let arr = [...Array(integer).keys()].slice(2).reduce((accum, currItem) => {
		if(integer % currItem == 0){
			accum.push(currItem);
		}
		return accum;
	}, []);

	return arr.length > 0 ? arr : `${integer} is prime`;
};

console.log(divisors(12));
console.log(divisors(25));
console.log(divisors(13));