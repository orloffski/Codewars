/**
Your task is to sort a given string. Each word in the string will contain a single number. 
This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. 
The words in the input String will only contain valid consecutive numbers.
Examples

"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""

 */

const order = words => {
	let map = words.split(' ').reduce((accum, currItem) => {
		let num = currItem.match(/[0-9]/);

		return accum.set(num, currItem);
	}, new Map());

	map = new Map([...map.entries()].sort());

	return joinMap(map).trim();
}

const joinMap = map => {
	let result = '';

	for(let value of map.values()){
		result = result + ' ' + value;
	}

	return result;
}


console.log(order("is2 Thi1s T4est 3a"));
console.log('-----------------');
console.log(order("4of Fo1r pe6ople g3ood th5e the2"));
console.log('-----------------');
console.log(order(""));