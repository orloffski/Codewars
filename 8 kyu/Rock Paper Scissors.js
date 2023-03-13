/**
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"
 */

const rps = (p1, p2) => {
	let playArr = ["scissors", "paper", "rock"];
	let mess1 = "Player 1 won!";
	let mess2 = "Player 2 won!";

	if(p1 == p2){
		return "Draw!"
	}

	if(p1 == playArr[0] && p2 == playArr[1] || p1 == playArr[1] && p2 == playArr[2] || p1 == playArr[2] && p2 == playArr[0]){
		return mess1;
	}

	if(p1 == playArr[1] && p2 == playArr[0] || p1 == playArr[2] && p2 == playArr[1] || p1 == playArr[0] && p2 == playArr[2]){
		return mess2;
	}
};

console.log(rps('rock', 'scissors'));
console.log(rps('scissors', 'paper'));
console.log(rps('paper', 'rock'));

console.log(rps('scissors', 'rock'));
console.log(rps('paper', 'scissors'));
console.log(rps('rock', 'paper'));

console.log(rps('rock', 'rock'));
console.log(rps('scissors', 'scissors'));
console.log(rps('paper', 'paper'));