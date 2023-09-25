/**
Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
The first word within the output should be capitalized only if the original word was capitalized 
(known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.
Examples

"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior"

 */

const toCamelCase = str =>
	str.replace(/[_-]/g, ' ').split(' ').reduce(
		(result, currItem, currIndex) => {
			return currIndex == 0 ? 
				result + currItem
				:
				result + currItem.charAt(0).toUpperCase() + currItem.slice(1)
		}, '');

console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));
console.log(toCamelCase("The_Stealth-Warrior"));