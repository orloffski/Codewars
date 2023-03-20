/**
Complete the solution so that it splits the string into pairs of two characters. 
If the string contains an odd number of characters then it should replace the missing second 
character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']

 */

const solution = (str) => {
	let result = [];
	let count = (str.length % 2 == 0 ? str.length / 2 : parseInt(str.length / 2) + 1);

	for(let i = 0; i < count * 2; i += 2){
		result.push(str.substring(i, i + 2))
   	}

	if(str.length % 2 != 0){
		result[result.length - 1] = result[result.length - 1] + '_';
	}

	return result;
}

console.log(solution('abc'));
console.log(solution('abcdef'));
console.log(solution('abcdefjhi'));