/**
Give you three numbers:a b c,please return an equation(Operators include +,-,*,/), return type is string.

For example:

sc(1,2,3) should return "1+2=3" or "2+1=3" or "3-2=1" or "3-1=2"

sc(2,2,4) should return "2+2=4" or "2*2=4" or "4/2=2" or "4-2=2"

sc(6,2,3) should return "2*3=6" or "3*2=6" or "6/2=3" or "6/3=2"

Return one of the possible answer, you can pass the test.

If there is no equation between a,b,c, return ""
 */

const sc = (a,b,c) => {
	let max = Math.max(a, b, c);
	let min = Math.min(a, b, c);
	let med = getMed([a, b, c], max, min);

	result = "" || checkAdd(max, med, min) || checkSub(max, med, min) || checkDiv(max, med, min) || checkMult(max, med, min);

	return result;
}

const getMed = (arr, max, min) => {
	arr.splice(arr.indexOf(max), 1);
	arr.splice(arr.indexOf(min), 1);

	return arr[0];
}

const checkAdd = (max, med, min) => {
	if(min + med == max){
		return `${min}+${med}=${max}`;
	}else{
		return "";
	}
}

const checkSub = (max, med, min) => {
	if(max - min == med){
		return `${max}-${min}=${med}`;
	}else{
		return "";
	}
}

const checkDiv = (max, med, min) => {
	if(max / min == med){
		return `${max}/${min}=${med}`;
	}else{
		return "";
	}
}

const checkMult = (max, med, min) => {
	if(min * med == max){
		return `${min}*${med}=${max}`;
	}else{
		return "";
	}
}

console.log(sc(1,2,3));
console.log(sc(2,2,4));
console.log(sc(6,2,3));
console.log(sc(2,3,4));