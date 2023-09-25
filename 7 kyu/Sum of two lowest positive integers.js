/**
 * Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.

 */

const sumTwoSmallestNumbers = (numbers) => {  
	let maxItem = getMax(numbers);

	return numbers.reduce((accum, currItem) => {
			if(currItem < accum[0]){
				accum[1] = accum[0];
				accum[0] = currItem;
			}else if(currItem < accum[1]){
				accum[1] = currItem;
			}

			return accum;
		},[maxItem, maxItem]).reduce((accum, currItem) => accum + currItem, 0);
}

const getMax = numbers => numbers.reduce((accum, currItem) => currItem > accum ? currItem : accum, 0);

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]));
console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7]));
console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1]));