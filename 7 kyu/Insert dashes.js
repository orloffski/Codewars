/**
Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') 
between each two odd digits in num. 
For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

Note that the number will always be non-negative (>= 0).

 */

const insertDash = num => {
	return String(num).split('').reduce((accum, currItem, currIndex) => {
		if(currItem == '0'){
			return accum + currItem;
		}
		
		if(Number(currItem) % 2 != 0){
			return accum + (checkNext(String(num), currIndex) ? currItem + '-' : currItem);
		}else{
			return accum + currItem;
		}
	},'');
}

const checkNext = (numStr, index) => {
	if(numStr.length - 1 == index){
		return false;
	}

	return Number(numStr[index + 1]) % 2 != 0;
}

console.log(insertDash(454793));