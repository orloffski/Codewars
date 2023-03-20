/**
Write a function that removes every lone 9 that is inbetween 7s.

"79712312" --> "7712312"
"79797"    --> "777"

 */

const sevenAte9 = str => {

	while(str.match(/797/)){
		str = str.replace(/797/g, '77');
	}

	return str;
}

console.log(sevenAte9('79712312'));
console.log(sevenAte9('79797'));
console.log(sevenAte9('165561786121789797'));