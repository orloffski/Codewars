/**
Kids drink toddy.
Teens drink coke.
Young adults drink beer.
Adults drink whisky.
Make a function that receive age, and return what they drink.

Rules:

Children under 14 old.
Teens under 18 old.
Young under 21 old.
Adults have 21 or more.
Examples: (Input --> Output)

13 --> "drink toddy"
17 --> "drink coke"
18 --> "drink beer"
20 --> "drink beer"
30 --> "drink whisky"
 */

peopleWithAgeDrink = (old) => {
	let result = '';

	if(old < 14){
		return "drink toddy";
	}

	if(14 <= old && old < 18){
		return "drink coke";
	}

	if(18<= old && old < 21){
		return "drink beer";
	}

	if(old >= 21){
		return "drink whisky";
	}
};

console.log(peopleWithAgeDrink(13));
console.log(peopleWithAgeDrink(17));
console.log(peopleWithAgeDrink(18));
console.log(peopleWithAgeDrink(20));
console.log(peopleWithAgeDrink(30));