/**
Complete the function/method so that it takes a PascalCase string and returns the string in snake_case notation. 
Lowercase characters can be numbers. If the method gets a number as input, it should return a string.
Examples

"TestController"  -->  "test_controller"
"MoviesAndBooks"  -->  "movies_and_books"
"App7Test"        -->  "app7_test"
1                 -->  "1"

 */

const toUnderscore = string => {
	return string.toString().split('').reduce((accum, currItem, currIndex) => {
		if(/[a-zA-Z]/.test(currItem) && currIndex != 0 && currItem === currItem.toUpperCase()){
			accum.push('_' + currItem.toLowerCase());
		}else{
			accum.push(currItem.toLowerCase());
		}
  
		return accum;
	}, []).join('')
}

console.log(toUnderscore("TestController"));
console.log(toUnderscore("MoviesAndBooks"));
console.log(toUnderscore("App7Test"));
console.log(toUnderscore("1"));
console.log(toUnderscore(5));