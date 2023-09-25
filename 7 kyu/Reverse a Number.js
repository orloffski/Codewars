/**
Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.
Examples

 123 ->  321
-456 -> -654
1000 ->    1

 */

const reverseNumber = n => {
	let newNum = 0;

	while(n != 0){
		newNum *= 10;
		newNum += n % 10;

		n = parseInt(n / 10);
	}

	return newNum;
}

console.log(reverseNumber(123));
console.log(reverseNumber(-456));
console.log(reverseNumber(1000));