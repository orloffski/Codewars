/**
While mpg (miles per gallon) is a common unit of measurement for fuel economy in North America, 
for Europe the standard unit of measurement is generally liter per 100 km. 
Conversion between these units is somewhat hard to calculate in your head, 
so your task here is to implement a simple convertor in both directions.

Functions
mpg2lp100km() converts from miles per gallon to liter per 100 km.
lp100km2mpg() converts in the opposite direction.
Output
The output of both functions should be a number rounded to 2 decimal places.

Examples
mpg2lp100km(42) returns 5.6
lp100km2mpg( 9) returns 26.13
Reference
For this kata, use U.S. gallon, not imperial gallon.

1 gallon = 3.785411784 liters
1 mile = 1.609344 kilometers
 */

let gallon = 3.785411784;
let mile = 1.609344;

function mpg2lp100km(x){
	let lp100km = 100 / (x * mile) * gallon;
	return Math.round(lp100km * 100) / 100;
}
  
function lp100km2mpg(x){
	let mpg = (100 / mile) / (x / gallon);
	return Math.round(mpg * 100) / 100;
}

console.log(mpg2lp100km(42));
console.log(lp100km2mpg(9));