/**
You need to find out if the cat can catch the mouse from it's current position 
and return "Caught!" or "Escaped!" respectively.

Finally, if one of two animals are not present, return "boring without two animals".
Examples

moves = 5

map =
..C......
.........
....m....

returns "Caught!" because the cat can catch the mouse in 4 moves

moves = 5

map =
.C.......
.........
......m..

returns "Escaped!" because the cat cannot catch the mouse in  5 moves

 */

const catMouse = (map,moves) => {
	if(!checkMap(map)){
		return "boring without two animals";
	}

	let catPosition = getAnimalPosition(map, 'C');
	let mousePosition = getAnimalPosition(map, 'm');

	if(checkCaught(catPosition, mousePosition, moves)){
		return "Caught!";
	}else{
		return "Escaped!";
	}
}

const checkMap = map => {
	return map.includes('C') && map.includes('m');
}

const getAnimalPosition = (map, animal) => {
	return map.split('\n').reduce((accum, currItem, currIndex) => {
		return currItem.includes(animal) ? accum = [currItem.lastIndexOf(animal), currIndex] : accum;
	}, []);
}

const checkCaught = (cat, mouse, moves) => {
	return Math.abs(mouse[0] - cat[0]) + Math.abs(mouse[1] - cat[1]) <= moves;
}

map1=
`.C.......
.........
......m..`;

map2=
`..C......
.........
.........`;

map3=
`..C......
.........
....m....`;

console.log(catMouse(map1, 5));
console.log(catMouse(map2, 5));
console.log(catMouse(map3, 5));