/**
 In theory, the voltage of each electrical appliance on a series circuit is different, 
 depending on the size of the resistance value of the appliance, the voltage is usually 
 proportional to the resistance value.

Give you two parameters:

    array arr, contains some numbers, thay are some resistance value of an electric appliance in a series circuit.

    number total, total voltage of series circuit.

Please calculate their voltage values and return a number array, number should round to two decimals.
 */

const voltage = (arr,total) => {
	let summ = arr.reduce((accum, currItem) => {
		return accum + currItem;
	}, 0);

	return arr.map((currItem) => {
		return parseFloat((total * currItem/summ).toFixed(2));
	})
}

console.log(voltage([1,1], 380));
console.log(voltage([1,2,3], 380));
console.log(voltage([20,9,10,30,2,29],110));