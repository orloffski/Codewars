/**
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.
 */

const findUniq = arr => {
	let map = arr.reduce((accum, currItem) => {
		accum.has(currItem) ? accum.set(currItem, accum.get(currItem) + 1) : accum.set(currItem, 1);

		return accum;
	}, new Map());

	let sortedMap = new Map([...map.entries()].sort((a, b) => a[1] - b[1]));

	return sortedMap.keys().next().value;
}

console.log(findUniq([ 2, 1, 1, 1, 1, 1 ]));
console.log(findUniq([ 0, 0, 0.55, 0, 0 ]));