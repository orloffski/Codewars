/**
We are tracking down our rogue agent Matthew Knight also known as Roy Miller. 
He travels from places to places to avoid being tracked. 
Each of his travels are based on a list of itineraries in an unusual or incorrect order. 
The task is to determine the routes he will take in his every journey.
Task

You are given an array of routes of his itineraries. 
List down the only places where he will go in correct order based on his itineraries.
Example

Given the following routes:

[ [USA, BRA], [JPN, PHL], [BRA, UAE], [UAE, JPN] ]

The result will be:

"USA, BRA, UAE, JPN, PHL"

Note:

    It is safe to assume that there will be no repeating place with a different route.
    There are no empty routes.
    There will be at least one (1) route (from one waypoint to another).

 */

const findRoutes = routes => {
	let map = routes.reduce((accum, currItem) => {
		return accum.set(currItem[0], currItem[1]);
	}, new Map());

	let arr = new Array(findFirstPoint(map));

	while(arr.length <= map.size){
		arr.push(map.get(arr[arr.length - 1]));
	}

	return arr.join(', ');
}

const findFirstPoint = (map) => {
	let point = '';

	for(let key of map.keys()){
		if(![...map.values()].includes(key)){
			point = key;
		}
	}

	return point;
}

console.log(findRoutes([["USA", "BRA"], ["JPN", "PHL"], ["BRA", "UAE"], ["UAE", "JPN"] ]));
console.log(findRoutes([["MNL", "TAG"], ["CEB", "TAC"], ["TAG", "CEB"], ["TAC", "BOR"]]));
console.log(findRoutes([["UK", "GER"], ["GER", "BEL"], ["BEL", "CAN"]]));
console.log(findRoutes([["Chicago", "Winnipeg"], ["Halifax", "Montreal"], ["Montreal", "Toronto"], ["Toronto", "Chicago"], ["Winnipeg", "Seattle"]]));
console.log(findRoutes([["HQ", "SH"]]));