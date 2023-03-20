/**
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. 
A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]

And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]

 */

const towerBuilder = nFloors => {
	let arr = [];

	for(let i = nFloors; i > 0; i--){
		let whitespases = ' '.repeat(nFloors - i);
		let stars = '*'.repeat(i * 2 - 1);
		let floor = `${whitespases}${stars}${whitespases}`;
		arr.unshift(floor);
	}

	return arr;
}

console.log(towerBuilder(1));
console.log(towerBuilder(2));
console.log(towerBuilder(3));
console.log(towerBuilder(6));
console.log(towerBuilder(25));