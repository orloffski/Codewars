/**
You will be given an array of numbers. You have to sort the odd numbers in ascending order while 
leaving the even numbers at their original positions.
Examples

[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

 */

const sortArray = array => {
	let oddArray = array.reduce((accum, currItem) => {
		if(currItem % 2 != 0){
			accum.push(currItem);
		}
		return accum;
	}, []).sort((a, b) => a - b);

	for(let i = 0; i < array.length; i++){
		if(array[i] % 2 != 0){
			array[i] = oddArray.shift();
		}
	}

	return array;
}

console.log(sortArray([5, 3,  2, 8, 1, 4, 11]));
console.log(sortArray([5, 8, 6, 3, 4]));
console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));