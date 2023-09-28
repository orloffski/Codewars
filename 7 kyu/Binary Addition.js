/**
 * Implement a function that adds two numbers together and returns their sum in binary. 
 * The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

 */

const addBinary = (a,b) => {
	let summ = a + b;
	let result = '';

	while(summ > 0){
		result = (summ % 2) + result;
		summ = Math.trunc(summ / 2);
	}
	
	return result;
}

console.log(addBinary(1, 1));
console.log(addBinary(5, 9));
console.log(addBinary(0, 9));