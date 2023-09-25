/**
Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...

Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8


 */

const rowSumOddNumbers = n => {
	let summ = 0;
	let startIndex = getIndex(n - 1) * 2 + 1;

	for(let i = startIndex; i < (startIndex + 2 * n); i += 2){
		summ += i;
	}

	return summ;
}

const getIndex = rowNum =>
	rowNum == 0 ?  0 : rowNum + getIndex(rowNum - 1);


console.log(rowSumOddNumbers(1));
console.log('--------------------');
console.log(rowSumOddNumbers(2));
console.log('--------------------');
console.log(rowSumOddNumbers(3));
console.log('--------------------');
console.log(rowSumOddNumbers(4));
console.log('--------------------');
console.log(rowSumOddNumbers(42));