/**
 In theory, A parallel circuit can have a lot of branch circuit, 
 the total resistance of the parallel circuit is related to the resistance value of the branch circuit:

the reciprocal of the total resistance of a parallel circuit is equal to the sum of the reciprocal of the branch resistances.

Given parameter:

2D array arr they are each branch circuit of parallel circuits. 
thay contains some resistance value of electric appliances in the branch circuit.

Please calculate and return the total resistance of the parallel circuit.
 */

const resistance = arr => {
	let total = arr.reduce((accum, currItem) => {
		if(typeof currItem === 'object'){
			return accum + 1/currItem.reduce((accum2, currItem2) => {
				return accum2 + currItem2;
			}, 0)
		}else{
			return accum + 1/currItem;
		}
	}, 0);

	return parseFloat((1/total).toFixed(2))
}

console.log(resistance([[1],[1]]));
console.log(resistance([[1],[2]]));
console.log(resistance([[1],[2,3]]));