/**
Complete the solution so that the function will break up camel casing, using a space between words.
Example

"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""

 */

const solution = string =>
    string.split('').reduce((accum, currItem) => {
		return currItem.charCodeAt() < 91 ? accum + ' ' + currItem : accum + currItem;
	}, '').trim();

console.log(solution("camelCasing"));
console.log(solution("CamelCasingTest"));
console.log(solution("identifier"));
console.log(solution(""));