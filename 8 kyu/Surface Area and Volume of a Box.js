/**
Write a function that returns the total surface area and volume of a box as an array: [area, volume]
 */

const getSize = (width, height, depth) => {
	let area = 2 * width * height + 2 * height * depth + 2 * width * depth;
	let volume = width * height * depth;

	return [area, volume];
}

console.log(getSize(4, 2, 6));
console.log(getSize(10, 10, 10));