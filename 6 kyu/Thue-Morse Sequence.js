/**
Given a positive integer n, return first n dgits of Thue-Morse sequence, as a string (see examples).

Thue-Morse sequence is a binary sequence with 0 as the first element. The rest of the sequece is obtained by adding the Boolean (binary) complement of a group obtained so far.

For example:

0
01
0110
01101001
and so on...

Ex.:

thueMorse(1); //'0'
thueMorse(2); //'01'
thueMorse(5); //'01101'
thueMorse(10): //'0110100110'

    You don't need to test if n is valid - it will always be a positive integer.
    n will be between 1 and 10000

 */

const thueMorse = n => {
	let result = '0';

	while(n > result.length){
		result += getInverse(result);
	}

	return n == 1 ? result : result.slice(0, n);
}

const getInverse = str => {
	return str.split('').map((currItem) => {
		return Number(currItem) == 0 ? 1 : 0;
	}).join('');
}

console.log(thueMorse(1));
console.log(thueMorse(2));
console.log(thueMorse(5));
console.log(thueMorse(10));