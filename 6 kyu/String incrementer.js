/**
Your job is to write a function which increments a string, to create a new string.

    If the string already ends with a number, the number should be incremented by 1.
    If the string does not end with a number. the number 1 should be appended to the new string.

Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.

 */

const incrementString = string => {
	let num = '';

	for(let i = string.length - 1; i >= 0; i--){
		if(/[0-9]/.test(string[i])){
			num = string[i] + num;
		}else{
			break;
		}
	}

	let newNum = String(Number(num) + 1).padStart(num.length, '0');

	return string.slice(0, string.length - num.length) + newNum;
}

console.log(incrementString("foobar0009"));
console.log(incrementString("fo55obar0009"));