/**
The word i18n is a common abbreviation of internationalization in the developer community, 
used instead of typing the whole word and trying to spell it correctly. Similarly, 
a11y is an abbreviation of accessibility.

Write a function that takes a string and turns any and all "words" (see below) 
within that string of length 4 or greater into an abbreviation, following these rules:

    A "word" is a sequence of alphabetical characters. By this definition, any other character 
	like a space or hyphen (eg. "elephant-ride") will split up a series of letters into two words 
	(eg. "elephant" and "ride").
    The abbreviated version of the word should have the first letter, then the number of removed characters, 
	then the last letter (eg. "elephant ride" => "e6t r2e").

Example

abbreviate("elephant-rides are really fun!")
//          ^^^^^^^^*^^^^^*^^^*^^^^^^*^^^*
// words (^):   "elephant" "rides" "are" "really" "fun"
//                123456     123     1     1234     1
// ignore short words:               X              X

// abbreviate:    "e6t"     "r3s"  "are"  "r4y"   "fun"
// all non-word characters (*) remain in place
//                     "-"      " "    " "     " "     "!"
=== "e6t-r3s are r4y fun!"

 */

const abbreviate = string => {
	let counter = -1;

	return string.split(' ').map((element) => {
		return element.length < 4 ?
			element : 
			element.split('').reduce((accum, currItem, currIndex) => {
				//console.log(`*${element}*`);
				if(/[a-zA-Z]/.test(currItem)){
					if(currIndex == 0 || counter == -1){
						accum += currItem;
					}
	
					if(currIndex == element.length - 1){
						accum = accum + counter + currItem;
						counter = -2;
					}

					counter++;
				}else{
					accum = accum + (counter - 1) + element[currIndex - 1] + currItem;
					counter = -1;
				}

				return accum;
		}, '')
	}).join(' ');
}

console.log(abbreviate("internationalization"));
console.log(abbreviate("accessibility"));
console.log(abbreviate("Accessibility"));
console.log(abbreviate("elephant-rides"));
console.log(abbreviate("You need, need not want, to complete this code-wars mission"));
