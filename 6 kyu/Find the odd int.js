/**
 * Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
Examples

[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

 */

const findOdd = (a) => {
	let mapData = a.reduce((accum, currItem) => {
		if(accum.has(currItem)){
			accum.set(currItem, accum.get(currItem) + 1);
		}else{
			accum.set(currItem, 1);
		}

		return accum;
	}, new Map());

	for(let key of mapData.keys()){
		if(mapData.get(key) % 2 != 0) return key;
	}
}

console.log(findOdd([7]));
console.log(findOdd([0]));
console.log(findOdd([1,1,2]));
console.log(findOdd([0,1,0,1,0]));
console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]));