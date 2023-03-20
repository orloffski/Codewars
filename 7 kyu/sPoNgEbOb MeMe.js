/**
You need to create a function that converts the input into this format, with the output being the same string 
expect there is a pattern of uppercase and lowercase letters.

Example:

input:  "stop Making spongebob Memes!"
output: "StOp mAkInG SpOnGeBoB MeMeS!"

 */

const spongeMeme = sentence => sentence.split('').reduce((accum, currItem, currIndex) => {
	return accum + (currIndex % 2 == 0 ? currItem.toUpperCase() : currItem.toLowerCase());
},'');

console.log(spongeMeme("stop Making spongebob Memes!"));