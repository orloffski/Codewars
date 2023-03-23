/**
Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.
Example

alphabetPosition("The sunset sets at twelve o' clock.")

Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

 */

const alphabetPosition = text =>
	text.split('').reduce((accum, currItem) => {
		if(/[a-zA-Z]/.test(currItem)){
			accum.push(currItem.charCodeAt() >= 97 ? currItem.charCodeAt() - 96 : currItem.charCodeAt() - 64);
		}

		return accum;
	}, []).join(' ');

console.log(alphabetPosition("The sunset sets at twelve o' clock."));